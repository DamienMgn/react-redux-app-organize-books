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
      dispatch(isLoading())
      axios.get('http://localhost:8000/api/get-books', {headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then(response => {
        let books = [];

        response.data.forEach(book => {
            books.push(JSON.parse(book.data))
        });

        dispatch(getBooks(books))
        console.log(books)
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
         }

        axios.post("http://localhost:8000/api/addBook", [bodyParameters], {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
              console.log(error);
            }); 
    }
}

export const deleteUserBook = (book, props) => {
    return dispatch => {

        let bookCategory = book.category;

        let bodyParameters = {
            book: book,
         }

        axios.post("http://localhost:8000/api/deleteBook", [bodyParameters], {headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
            .then((response) => {
                console.log(response);
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