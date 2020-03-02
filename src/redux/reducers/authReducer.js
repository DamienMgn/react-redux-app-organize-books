const initState = {
  isLoading: true,
};

const AuthReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
          return {...state, user: action.payload, loginError: null, registerError: null}
        case 'REGISTER_USER':
          return {...state, isRegistred: true, loginError: null, registerError: null}
        case 'LOGOUT_USER':
          return {...state, user: null, isRegistred: false}
        // Vérifie si l'utilisateur est connecté
        case 'IS_LOGGED':
          return {...state, user: action.payload, isLoading: false}
        case 'LOGIN_ERROR':
          return {...state, loginError: action.payload}
        case 'REGISTER_ERROR':
          return {...state, registerError: action.payload}
        default:
          return state;
    }
 }

export default AuthReducer