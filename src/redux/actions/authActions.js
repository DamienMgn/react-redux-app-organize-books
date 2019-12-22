import axios from 'axios'

export const userFetchLogin = user => {
    return dispatch => {
        axios.post('https://cryptic-citadel-76854.herokuapp.com/api/login', {
            'email': user.email,
            'password': user.password
          })
            .then(response => {
                dispatch(loginUser(response.data));
                localStorage.setItem('token', response.data.token);
            })
            .catch(function (error) {
              dispatch(loginError(error.response.data));
              console.log(error)
            }); 
    }
}

export const userFetchRegister = (user, props) => {
  return dispatch => {
      axios.post('https://cryptic-citadel-76854.herokuapp.com/api/register', {
          'name': user.name,
          'email': user.email,
          'password': user.password
        })
          .then(response => {
              dispatch(registerUser(response.data));
              props.push("/login");
          })
          .catch(function (error) {
            dispatch(registerError(error.response.data));
            console.log(error)
          }); 
  }
}

export const userFetchLogout = () => {
  return dispatch => {
    axios.get('https://cryptic-citadel-76854.herokuapp.com/api/logout', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
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
    axios.get('https://cryptic-citadel-76854.herokuapp.com/api/is-logged', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
    .then(response => {
      dispatch(isLogged(response.data))
    })
    .catch(function (error) {
      console.log(error);
      dispatch(isLogged(null))
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

export const registerError = error => ({
  type: 'REGISTER_ERROR',
  payload: error
})

export const loginError = error => ({
  type: 'LOGIN_ERROR',
  payload: error
})
