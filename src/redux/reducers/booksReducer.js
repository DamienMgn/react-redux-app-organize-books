const initState = {
    isLoading: true,
    currentBooks: [],
    userBooks: []
  };
  
  const BooksReducer = (state = initState, action) => {

      switch (action.type) {
          case 'LOAD_BOOKS':
            return {...state, currentBooks: action.payload}
          case 'IS_LOADING':
            return {...state, isLoading: !state.isLoading}
          case 'GET_BOOKS':
              return {...state, userBooks: action.payload}
          case 'ADD_BOOKS':
              let userBooks = [...state.userBooks, action.payload]
              return {...state, userBooks}
          default:
            return state;
      }
   }
  
  export default BooksReducer