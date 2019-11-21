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


export const isLoading = () => ({
    type: 'IS_LOADING'
})

export const loadBooks = (books) => ({
    type: 'LOAD_BOOKS',
    payload: books
})