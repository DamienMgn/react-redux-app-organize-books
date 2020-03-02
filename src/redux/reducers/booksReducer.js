const initState = {
    isLoading: false,
    currentBooks: [],
    userBooks: []
  };

  const BooksReducer = (state = initState, action) => {

      switch (action.type) {
          // Charge les livres de l'API Google
          case 'LOAD_BOOKS':
            return {...state, currentBooks: action.payload}
          // Pour afficher le composant Loader en attendant les résultats
          case 'IS_LOADING':
            return {...state, isLoading: !state.isLoading}
          // Charge les livres de l'utilisateur
          case 'GET_BOOKS':
              return {...state, userBooks: action.payload}
          // Ajouter un livre
          case 'ADD_BOOKS':
              let userBooks = [...state.userBooks, action.payload]
              return {...state, userBooks}
          default:
            return state;
      }
   }
  
  export default BooksReducer