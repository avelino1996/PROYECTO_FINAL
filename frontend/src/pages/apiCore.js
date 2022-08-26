import { API } from '../config'

export const signin = user => {
    return fetch(`${API}/api/users/login`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) // user: 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  }

  export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data));
      next();
    }
  }

  export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('jwt')) {
      //return JSON.parse(localStorage.getItem('jwt'));
      return localStorage.getItem('jwt')
    }
      return false;
  }

  export const signout = (next) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
      next();
      return fetch(`${API}/`, {
        method: 'GET',
      })
        .then(response => {
            console.log('signout',response);
        })
        .catch( err => console.log(err));
    }
  }