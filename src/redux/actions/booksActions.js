import axios from 'axios'

export const searchBooks = search => {
    return dispatch => {
        dispatch(isLoading())
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
        .then((response) => {
            dispatch(loadBooks(response.data.items))
        })
        .then(() => {
            dispatch(isLoading())
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}


export const getUserBooks = () => {
    return dispatch => {
      axios.get('https://safe-harbor-85266.herokuapp.com/api/get-books', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then(response => {
        let books = [];

        response.data.forEach(book => {
            books.push(JSON.parse(book.data))
        });

        dispatch(getBooks(books))
      })
      .then(() => {
          dispatch(isLoading());
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }


export const addUserBook = (book, category) => {
    return dispatch => {

        book.category = category

        let bodyParameters = {
            book: book,
            bookId: book.id
         }

        axios.post("https://safe-harbor-85266.herokuapp.com/api/add-book", bodyParameters, {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
            .then((response) => {
                let books = [];

                response.data.forEach(book => {
                    books.push(JSON.parse(book.data))
                });
        
                dispatch(getBooks(books))
            })
            .catch(function (error) {
              console.log(error);
            }); 
    }
}

export const deleteUserBook = (book) => {
    return dispatch => {

        let bodyParameters = {
            book: book,
         }

        axios.post("https://safe-harbor-85266.herokuapp.com/api/delete-book", [bodyParameters], {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
            .then((response) => {
                let books = [];

                response.data.forEach(book => {
                    books.push(JSON.parse(book.data))
                });
        
                dispatch(getBooks(books))
                window.history.back();
            })
            .catch(function (error) {
              console.log(error);
            }); 
    }
}

export const isLoading = () => ({
    type: 'IS_LOADING'
})

export const loadBooks = (books) => ({
    type: 'LOAD_BOOKS',
    payload: books
})

export const getBooks = (books) => ({
    type: 'GET_BOOKS',
    payload: books
})

export const addBook = (books) => ({
    type: 'ADD_BOOK',
    payload: books
})
