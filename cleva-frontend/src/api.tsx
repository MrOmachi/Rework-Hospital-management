/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";

const API_URL =
  "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1";

export const createKyc = async (Payload: any) => {
    return await axios.post(`${API_URL}/kyc`, JSON.stringify(Payload)).then((response) => {
        localStorage.setItem("KycIdentifier",response.data.KycIdentifier);
        localStorage.setItem("BusinessKyc",JSON.stringify(response.data.BusinessKyc));
        })
}

export const getKyc = async (KycIdentifier:any) => {
    if (KycIdentifier !== null){
        console.log("kkk:",KycIdentifier);
            return await axios.get(`${API_URL}/kyc/${KycIdentifier}`).then((response) => {
                localStorage.setItem("BusinessKyc",JSON.stringify(response.data.BusinessKyc));
                return response;
            })
        }
}

export const updateKyc = async (KYCIdentifier: string, Payload: any) => {
  return await axios.put(`${API_URL}/kyc/${KYCIdentifier}`, JSON.stringify(Payload));
}