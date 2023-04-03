import axios from 'axios';
import { BsBodyText } from 'react-icons/bs';
import {VIRTUAL_ACCOUNTS} from "./vritual_accounts";
import {LINKED_ACCOUNTS} from "./linked_accounts";


const APIGatewayEndpointURL = "https://ycdemo.herokuapp.com";

export const getVirtualAccounts = async () => {
  // const url = `${APIGatewayEndpointURL}/virtualaccounts`
  // const result = callBackend( "GET", url, {})
  return {data: VIRTUAL_ACCOUNTS}
};

export const getVirtualAccount = (id) => {
  const url = `${APIGatewayEndpointURL}/virtualaccounts/`+id
  const result = callBackend( "GET", url, {})
  return result;
};


export const getRecipients = () => {
  const url = `${APIGatewayEndpointURL}/recipients?nextToken=1+TtuF99eXJcdUsNvbhmIPFhyHKc7Nkwkgm9ML=qgsXDB9FZAGVCkONZqAAjxMa3svq8PhplC9G8w5y+R1nRJT87hJSBE7hbHcxVRF28Dr0EsLZ4tuLepIWTnojxWhDfKqJHCERVkXlU06y=6+roeR1xbdF=k8nnjpRBEnBapz/71=L/L2/XTUYkUssw8C=oxcWMUNvgCnkEw9ovcuFOG2pbVL9hhVmIVHklOfEcXQRWu5yyBAK6+6DDKKhn/F9D`
  const result = callBackend( "GET", url, {})
  return result;
};


export const createRecipient = (data) => {
  const url = `${APIGatewayEndpointURL}/recipients`;
  console.log("API data:");
  console.log(data);
  const result = callBackend( "POST", url,{
    AccountNumber: data.AccountNumber,
    Address: {
      StreetAddress: data.Address,
      Country:data.Country
    },
    BankName: data.BankName,
    Country: data.Country,
    FullName:data.FullName,
    RoutingNumber: data.RoutingNumber
  });
  return result;
};



export const createPayment = (data) => {
  const url = `${APIGatewayEndpointURL}/recipients`
  const result = callBackend( "POST", url,{
    TransactionDetail: {
      PaymentMade: {
        TransactionDomain: data.Domain,
        Sender: data.Sender,
        Recipient: data.Recipient,
        Amount: data.Amount,
        Fee: data.Fee,
        Description: data.Description
      }
  }
  });
  return result;
};



export const getRecipient = (id) => {
  const url = `${APIGatewayEndpointURL}/recipients/`+id
  const result = callBackend( "GET", url, {})
  return result;
};


export const getRates = (from,to) => {
  const url = `${APIGatewayEndpointURL}/rates/`+from+`/`+to
  const result = callBackend( "GET", url, {})
  return result;
};


export const getLinkedAccounts = async () => {
  // const url = `${APIGatewayEndpointURL}/linkedacccounts?nextToken=1+TtuF99eXJcdUsNvbhmIPFhyHKc7Nkwkgm9ML=qgsXDB9FZAGVCkONZqAAjxMa3svq8PhplC9G8w5y+R1nRJT87hJSBE7hbHcxVRF28Dr0EsLZ4tuLepIWTnojxWhDfKqJHCERVkXlU06y=6+roeR1xbdF=k8nnjpRBEnBapz/71=L/L2/XTUYkUssw8C=oxcWMUNvgCnkEw9ovcuFOG2pbVL9hhVmIVHklOfEcXQRWu5yyBAK6+6DDKKhn/F9D`
  // const result = callBackend( "GET", url, {})
  // return result
  return {data: LINKED_ACCOUNTS};
};

export const getTransactions = () => {
  const url = `${APIGatewayEndpointURL}/transactions?nextToken=1+TtuF99eXJcdUsNvbhmIPFhyHKc7Nkwkgm9ML=qgsXDB9FZAGVCkONZqAAjxMa3svq8PhplC9G8w5y+R1nRJT87hJSBE7hbHcxVRF28Dr0EsLZ4tuLepIWTnojxWhDfKqJHCERVkXlU06y=6+roeR1xbdF=k8nnjpRBEnBapz/71=L/L2/XTUYkUssw8C=oxcWMUNvgCnkEw9ovcuFOG2pbVL9hhVmIVHklOfEcXQRWu5yyBAK6+6DDKKhn/F9D`
  const result = callBackend( "GET", url, {})
  return result;
};


export const callBackend = async (method, url,data) => {
  let result = {status: -1, data: {}};

  try {
    switch (method) {
      case "GET":
        result = await getCall(url)
        break;
      case "POST":
        result = await postCall(url,data)
        break;
      default:
        throw new Error(`Method  ${method} is not recognized`)
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = `An error occurred for : ${method} ${url}
                status = ${error.response.status} error = ${JSON.stringify(error.response.data)}`
      console.log(message)
      result.status = error.response.status
      result.data = error.response.data
    } else {
      const message = `An error occurred for : ${method} ${url}`
      console.log(message)
    }
  }
  return result
}

const getCall = async (url) => {
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response
}


const postCall = async (url,body) => {
  const response = await axios.post(url, {
    ...body
  });
  return response
}


