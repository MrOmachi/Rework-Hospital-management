/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useAppDispatch } from "./app/hooks";
import { setKycIdentifier, setkycInfo } from "./redux/Kyc/kycSlice";

const API_URL =
  "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1";

export const createKyc = async (Payload: any) => {
    const dispatch = useAppDispatch();
    return await axios.post(`${API_URL}/kyc`, Payload).then((response) => {
            dispatch(setKycIdentifier(response.data.KycIdentifier))
                })
}

export const getKyc = async (KycIdentifier:any) => {
    const dispatch = useAppDispatch();
    if (KycIdentifier){
        return await axios.get(`${API_URL}/kyc/${KycIdentifier}`).then((response) => {
                dispatch(setkycInfo(response.data.BusinessKyc))
            })
    }
}

export const updateKyc = async (KYCIdentifier: string, Payload: any) => {
  return await axios.put(`${API_URL}/kyc/${KYCIdentifier}`, Payload);
}