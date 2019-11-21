const initState = {
  isLoading: true
};

const AuthReducer = (state = initState, action) => {

  let nextState = state

    switch (action.type) {
        case 'LOGIN_USER':
          return {...nextState, user: action.payload}
        case 'REGISTER_USER':
          return {...nextState, isRegistred: true}
        case 'LOGOUT_USER':
          return {...nextState, user: null, isRegistred: false}
        case 'IS_LOGGED':
          return {...nextState, user: action.payload, isLoading: false}
        default:
          return nextState;
    }
 }

export default AuthReducer