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
  selectedBox: string[];
  };



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
          PhoneNumber: userObj.phone_number,
          Address: {
            Country: "Nigeria",
          },
          PIN: "1714",
          Birthdate: "8906-85-24",
        },
        UsageIntent: {
          Lorem_3: userObj.selectedBox,
          proident0: userObj.selectedBox,
          cillumc: userObj.selectedBox
        }
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

  getCurrentUser() {
    const userData = sessionStorage.getItem('token');
    if (userData !== null) {
      // userData is not null, so it can be safely assigned to a string variable
      return userData;
    }
    // Handle the case when userData is null, such as returning a default value or throwing an error
    // For example:
    throw new Error('User data is not available');
  }
}

export default new AuthService();
