import axios from 'axios'

export const userFetchLogin = user => {
    return dispatch => {
        axios.post('http://localhost:8000/api/login', {
            'email': user.email,
            'password': user.password
          })
            .then(response => {
                dispatch(loginUser(response.data))
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
