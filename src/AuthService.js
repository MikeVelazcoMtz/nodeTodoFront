
export default class AuthService {
  isAuthenticated() {
    var token = localStorage.getItem('auth_token');

    if (token === null) {
      return false;
    }

    var timestamp = atob(token.split('.')[0]);
    timestamp = new Date(timestamp * 1000); // JS timestamps are on miliseconds

    // Check if date is still valid
    if (new Date(timestamp * 1000).getTime() <= new Date().getTime()) {
      return false;
    }
    console.log(timestamp);

    return true;
  }

  authenticate() {

  }

  logOut() {
    localStorage.removeItem('auth_token');
  }
}