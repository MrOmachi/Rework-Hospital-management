/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useAppDispatch } from "./app/hooks";

const API_URL =
  "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1";

export const createKyc = async (Payload: any) => {
    return await axios.post(`${API_URL}/kyc`, JSON.stringify(Payload)).then((response) => {
        return response;
        })
}

export const getKyc = async (KycIdentifier:any) => {
    if (KycIdentifier !== null){
            return await axios.get(`${API_URL}/kyc/${KycIdentifier}`).then((response) => {
                 return response;
            })
        }
}

export const updateKyc = async (KYCIdentifier: string, Payload: any) => {
  if(KYCIdentifier){
    return await axios.put(`${API_URL}/kyc/${KYCIdentifier}`, JSON.stringify(Payload));
  }
}