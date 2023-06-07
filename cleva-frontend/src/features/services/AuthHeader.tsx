import AuthService from './AuthServices'

export default function authHeader() {
  const userData = AuthService.getCurrentUser();
  if (userData) {
    // console.log(userData)
    return { 
      Authorization: `Bearer ${userData}`}
  } else {
    return {};
  }

}