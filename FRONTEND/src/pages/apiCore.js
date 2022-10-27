import React from "react"
import { Navigate } from 'react-router';
import { API } from '../config';

export const signin = user => {
  return fetch(`${API}/api/users/login`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
};

export const signup = user => {
  return fetch(`${API}/api/users/users/create`, { 
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};


export const createPublication = publication => {
  return fetch(`${API}/api/publications/createPublication`, { 
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(publication)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const coments = coment => {
  
  return fetch(`${API}/api/coment/createComent`, { 
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(coment)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const deletedComents = coment => {
  
  return fetch(`${API}/api/coment/:id`, { 
    method: "DELETE",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(coment)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const authenticate = (data, next) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/users/logOut`, {
      method: 'GET',
    })
      .then(response => {
          console.log('signout',response);
      })
      .catch( err => console.log(err));
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return localStorage.getItem('jwt')
  }
    return false;
}

export const useUser = () => {
  const jwt = JSON.parse(localStorage.getItem('jwt'))

  if (jwt) {
    return jwt.user
  }

  return undefined
}
 export const ProtectedRoute = ({children})=>{
  const user = useUser();

  if(!user || (user && user.role !== "ADMIN")){
    return <Navigate to="/login"></Navigate>
  }

  return children
 }
