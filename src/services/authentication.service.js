export const loginRequest = (email, password) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        fetch('http://192.168.0.20:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
          .then(response => {
            if (response.status === 200) {
              response.json().then(data => {
                resolve({
                  email: email,
                  token: data.token
                });
              });
            } else if (response.status === 400) {
              reject("Wrong email and/or password");
            } else {
              reject("Error logging in");
            }
          })
          .catch(error => {
            reject("Error con la petición");
          });
      }, 1000);
    });
  };
  
  export const createUserRequest = (email, password) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        fetch('http://192.168.0.20:8000/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
          .then(response => {
            if (response.status === 201) {
              resolve("user");
            } else if (response.status === 400) {
              reject("Email already registered");
            } else {
              reject("Error signing up");
            }
          })
          .catch(error => {
            reject("Error con la petición");
          });
      }, 1000);
    });
  };
  