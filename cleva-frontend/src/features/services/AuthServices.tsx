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

// {
//   "BusinessUser": {
//     "BusinessName": "<string>",
//     "CustomAttributes": {
//       "BusinessToUsersMappingList": [
//         {
//           "UserID": "user-ilq5jLTLvsjk8hAe3hWGVX7pK",
//           "BusinessIdentifier": "bu-g8LClyeMVp6zQD4cF02unurEXlK"
//         },
//         {
//           "UserID": "user-BlVUSIQ6cX85LNTX77uT1TN7t",
//           "BusinessIdentifier": "bu-tbyNPmISJssGYzfmKuetLPenbOy"
//         }
//       ],
//       "roles": [
//         "BusinessReader",
//         "BusinessAdmin"
//       ]
//     },
//     "FullName": {
//       "FirstName": "<string>",
//       "MiddleName": "<string>",
//       "LastName": "<string>"
//     },
//     "StandardAttributes": {
//       "Email": "pdguru81@gmail.com",
//       "Password": "ABCDEFG1234!",
//       "PhoneNumber": "+16174600464",
//       "Address": {
//         "StreetAddress": "<string>",
//         "SecondStreetAddress": "<string>",
//         "City": "<string>",
//         "Country": "USA",
//         "StateOrTerritory": "<string>",
//         "Zipcode": "<string>",
//         "LGA": "<string>"
//       },
//       "Website": "<string>",
//       "PIN": "1714",
//       "Birthdate": "8906-85-24"
//     }
//   },
//   "ClientToken": "m/>;X,.ma)Y`k{!yQ ~4kvwyIl!Ig[`PJ"
// }

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
          MiddleName: "ooo",
          LastName: userObj.lastName,
        },
        StandardAttributes: {
          Email: userObj.email,
          Password: userObj.password,
          PhoneNumber: userObj.phone_number,
          Address: {
            StreetAddress: "fffff",
            SecondStreetAddress: "ffffff",
            City: "fffff",
            Country: "USA",
            StateOrTerritory: "ffff",
            Zipcode: "fffff",
            LGA: "fffff",
          },
          Website: "ttyrty",
          PIN: "1714",
          Birthdate: "8906-85-24",
        },
      },
      ClientToken: "m/>;X,.ma)Y`k{!yQ ~4kvwyIl!Ig[`PJ",
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
