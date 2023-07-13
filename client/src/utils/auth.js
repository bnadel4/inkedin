import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = decode(token);
   
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }

  getLoggedInUsername() {
    const token = this.getToken();
    if (token) {
      const profile = this.getProfile();
      console.log(profile.username);
      return profile.username;
      
    }
    return null;
  }


}
const Auth = new AuthService();
export default Auth;
