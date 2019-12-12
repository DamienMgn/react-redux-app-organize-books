import React, { Component }from 'react'

import { connect } from 'react-redux'

import { addUserBook, deleteUserBook } from '../../redux/actions/booksActions'

import { Button } from 'antd'

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

    render() {

        const currentBook = this.state.currentBook;

        return (
            <div className="current-book">
                <Button className="current-book-button" onClick={() => window.history.back()} type="primary">Retour</Button>
                {this.state.isLoading ? 
                    <h1>Loader</h1> : 
                    (
                    <div>
                        <div className="current-book-form-container">
                            {currentBook.volumeInfo.imageLinks !== undefined ? 
                            <img className="current-book-cover" src={currentBook.volumeInfo.imageLinks.thumbnail} alt=""/> :
                            <div className="current-book-cover"></div> }
                                <div className="form-add-book">
                                    <Button
                                    type={this.props.userBooks.find(book => book.id === currentBook.id).category === 1 ? null : "primary"}
                                    disabled={this.props.userBooks.find(book => book.id === currentBook.id).category === 1 ? true : false}
                                    className="search-page-button"
                                    onClick={() => this.addBook(1)}>
                                    Biliothèque
                                    </Button>
                                    <Button
                                    type={this.props.userBooks.find(book => book.id === currentBook.id).category === 2 ? null : "primary"}
                                    disabled={this.props.userBooks.find(book => book.id === currentBook.id).category === 2 ? true : false}
                                    className="search-page-button"
                                    onClick={() => this.addBook(2)}>
                                    Pile à lire
                                    </Button>
                                    <Button
                                    type={this.props.userBooks.find(book => book.id === currentBook.id).category === 3 ? null : "primary"}
                                    disabled={this.props.userBooks.find(book => book.id === currentBook.id).category === 3 ? true : false}
                                    className="search-page-button"
                                    onClick={() => this.addBook(3)}>
                                    Wish list
                                    </Button>
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