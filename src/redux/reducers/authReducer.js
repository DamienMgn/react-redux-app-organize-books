const initState = {
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
          return {...state, user: action.payload}
        default:
          return state;
    }
 }

export default AuthReducer