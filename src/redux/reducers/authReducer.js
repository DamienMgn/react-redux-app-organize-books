const initState = {
  isLoading: true
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
          return {...state, user: action.payload}
        case 'REGISTER_USER':
          return {...state, isRegistred: true}
        case 'LOGOUT_USER':
          return {...state, user: null, isRegistred: false}
        case 'IS_LOGGED':
          return {...state, user: action.payload, isLoading: false}
        default:
          return state;
    }
 }

export default AuthReducer