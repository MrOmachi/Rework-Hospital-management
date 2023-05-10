import axios from 'axios'
import {url} from './ApiUrl'


interface RegisterUsers {
  firstName : string;
  lastName : string;
  businessName: string;
  email: string;
  password: string;
  country: string;
  phone_number : any;
  
}
 
class AuthService {
   createUser(userObj: RegisterUsers) {
    return axios.post(url + "users", {
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      businessName: userObj.businessName,
      email: userObj.email,
      password:userObj.password,
      country: userObj.country,
      phone_number: userObj.phone_number
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