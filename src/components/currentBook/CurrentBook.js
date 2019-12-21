import React, { Component }from 'react'

import { connect } from 'react-redux'

import { addUserBook, deleteUserBook } from '../../redux/actions/booksActions'

import { Button } from 'antd'

import Loader from '../loader/Loader'

import './current-book.css'

class CurrentBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBook: {},
            isLoading: true,
        }
    }

    componentDidMount() {
        this.getCurrentBook()
        .then(currentBook => { this.setState({currentBook}) })
        .then(() => { this.setState({isLoading: false}) })
        .catch(err => console.log('There was an error:' + err))
    }

    getCurrentBook = () => {
        return new Promise((resolve, reject) => {
            let book_id = this.props.match.params.book_id;

            let currentBook = this.props.currentBooks.find(currentBook => currentBook.id === book_id)

            if (!currentBook) {
                currentBook = this.props.userBooks.find(userBook => userBook.id === book_id)
            }
    
            currentBook !== undefined ? resolve(currentBook) : reject('error')
        })
      }

    addBook = (category) => {
        this.props.addUserBook(this.state.currentBook, category)
    }

    deleteBook = () => {
        this.props.deleteUserBook(this.state.currentBook, this.props.history)
    }

    displayButton = (categoryId, categoryName, currentBook) => {
        let userBook = this.props.userBooks.find(book => book.id === currentBook.id);

        if (userBook != undefined) {
            return (
                <Button
                    type={userBook.category === categoryId ? null : "primary"}
                    disabled={userBook.category === categoryId ? true : false}
                    className="search-page-button"
                    onClick={() => this.addBook(categoryId)}>
                    {categoryName}
                </Button>
            )
        } else {
            return (
                <Button
                    type="primary"
                    className="search-page-button"
                    onClick={() => this.addBook(categoryId)}>
                    {categoryName}
                </Button>
            )
        }
    }

    displayBook () {

        const currentBook = this.state.currentBook;

        if (currentBook !== undefined){
            if (currentBook.volumeInfo !== undefined){
                return (
                    <div>
                    <Button className="current-book-button" onClick={() => window.history.back()} type="primary">Retour</Button>
                    {this.state.isLoading ? 
                        <Loader /> : 
                        (
                        <div>
                            <div className="current-book-form-container">
                                {currentBook.volumeInfo.imageLinks !== undefined ? 
                                <img className="current-book-cover" src={currentBook.volumeInfo.imageLinks.thumbnail} alt=""/> :
                                <div className="current-book-cover"></div> }
                                    <div className="form-add-book">
                                        {this.displayButton(1, 'Bibliothèque', currentBook)}
                                        {this.displayButton(2, 'Pile à Lire', currentBook)}
                                        {this.displayButton(3, 'Wish List', currentBook)}
                                        <Button
                                        type="danger"
                                        className="search-page-button"
                                        onClick={() => this.deleteBook()}>
                                        Supprimer
                                        </Button>
                                    </div>
                            </div>
                            <div className="current-book-informations">
                                <ul className="current-book-informations-authors-list">
                                {currentBook.volumeInfo.authors !== undefined ? currentBook.volumeInfo.authors.map(author => <li key={author}><h3>{author}</h3></li>) : null}
                                </ul>
                                <h4 className="current-book-informations-title">{currentBook.volumeInfo.title}</h4>
                                <span className="current-book-informations-published-date">{currentBook.volumeInfo.publishedDate}</span>
                                <p className="current-book-informations-description">{currentBook.volumeInfo.description !== undefined ? currentBook.volumeInfo.description : null}</p>
                            </div>
                        </div>
                        )}
                </div>
                  );
            }
        }
    
    }

    render() {

        return (
            <div className="current-book">
                {this.displayBook()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentBooks: state.books.currentBooks,
        userBooks: state.books.userBooks
    }
}

const mapDispatchToProps = dispatch => ({
    addUserBook: (book, category) => dispatch(addUserBook(book, category)),
    deleteUserBook: (book, history) => dispatch(deleteUserBook(book, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBook);