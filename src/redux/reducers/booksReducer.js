const initState = {
    isLoading: false,
    currentBooks: []
  };
  
  const BooksReducer = (state = initState, action) => {

    let nextState = state;

      switch (action.type) {
          case 'LOAD_BOOKS':
            return {...nextState, currentBooks: action.payload}
          case 'IS_LOADING':
            return {...nextState, isLoading: !nextState.isLoading}
          default:
            return state;
      }
   }
  
  export default BooksReducer