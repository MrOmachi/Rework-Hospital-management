import AuthService from './AuthServices'

export default function authHeader() {
  const userDataString = AuthService.getCurrentUser();
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    if (userData && userData.token) {
      return {
        Authorization: `Bearer ${userData.token}`
      };
    }
  }
  return {};
}
