const initState = {
    isLoading: false,
    currentBooks: [],
    userBooks: []
  };
  
  const BooksReducer = (state = initState, action) => {

    let nextState = state;

      switch (action.type) {
          case 'LOAD_BOOKS':
            return {...nextState, currentBooks: action.payload}
          case 'IS_LOADING':
            return {...nextState, isLoading: !nextState.isLoading}
          case 'GET_BOOKS':
              return {...nextState, userBooks: action.payload}
          case 'ADD_BOOKS':
              let userBooks = [...nextState.userBooks, action.payload]
              return {...nextState, userBooks}
          default:
            return state;
      }
   }
  
  export default BooksReducer