import axios from "axios";
import { url } from "./ApiUrl";

interface RegisterUsers {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  password: string;
  country: string;
  phone_number: any;
}


class AuthService {
  createUser(userObj: RegisterUsers) {
    return axios.post(url + "users", {
      BusinessUser: {
        BusinessName: userObj.businessName,
        CustomAttributes: {
          BusinessToUsersMappingList: [
            {
              UserID: "user-ilq5jLTLvsjk8hAe3hWGVX7pK",
              BusinessIdentifier: "bu-g8LClyeMVp6zQD4cF02unurEXlK",
            },
            {
              UserID: "user-BlVUSIQ6cX85LNTX77uT1TN7t",
              BusinessIdentifier: "bu-tbyNPmISJssGYzfmKuetLPenbOy",
            },
          ],
          roles: ["BusinessReader", "BusinessAdmin"],
        },
        FullName: {
          FirstName: userObj.firstName,
          LastName: userObj.lastName,
        },
        StandardAttributes: {
          Email: userObj.email,
          Password: userObj.password,
          PhoneNumber: "+2348082023909",
          Address: {
            Country: "Nigeria",
          },
          PIN: "1714",
          Birthdate: "8906-85-24",
        },
      },
    });
  }

  // login(username:string, password:string) {
  //   return axios
  //     .post(url + "", {
  //       username,
  //       password
  //   })
  // }

  // getCurrentUser() {
  //   const userData = JSON.parse(sessionStorage.getItem('token'));
  //   return userData
  // }
}

export default new AuthService();
