import axios from 'axios'

export const userFetchLogin = user => {
    return dispatch => {
        axios.post('http://localhost:8000/api/login', {
            'email': user.email,
            'password': user.password
          })
            .then(response => {
                dispatch(loginUser(response.data));
                localStorage.setItem('token', response.data.token);
            })
            .catch(function (error) {
              console.log(error);
            }); 
    }
}

export const userFetchRegister = (user, props) => {
  return dispatch => {
      axios.post('http://localhost:8000/api/register', {
          'name': user.name,
          'email': user.email,
          'password': user.password
        })
          .then(response => {
              dispatch(registerUser(response.data));
              props.push("/login");
          })
          .catch(function (error) {
            console.log(error);
          }); 
  }
}

export const userFetchLogout = () => {
  return dispatch => {
    axios.get('http://localhost:8000/api/logout', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
    .then(() => {
      dispatch(logoutUser());
      localStorage.removeItem('token');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const userFetchIsLogged = () => {
  return dispatch => {
    axios.get('http://localhost:8000/api/isLogged', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
    .then(response => {
      dispatch(isLogged(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const registerUser = userObj => ({
  type: 'REGISTER_USER',
  payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const isLogged = userObj => ({
  type: 'IS_LOGGED',
  payload: userObj
})
