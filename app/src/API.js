import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8000/api/`
});

const APIGatewayEndpointURL = "https://so4rc6g00a.execute-api.eu-north-1.amazonaws.com/demo"

export const getVirtualAccounts = () => {
  const url = `${APIGatewayEndpointURL}/virtualaccounts`
  const result = callBackend( "GET", url, {})
  const result2 = callBackend("GET", "http://13.51.251.20:3005/virtualaccounts")
};

export const callBackend = async (method, url) => {
  let result = {status: -1, data: {}};

  try {
    switch (method) {
      case "GET":
        result = await getCall(url)
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
  console.log(response);
  return response
}



