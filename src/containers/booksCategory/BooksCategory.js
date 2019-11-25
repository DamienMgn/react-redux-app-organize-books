import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getUserBooks } from '../../redux/actions/booksActions'

import BookList from '../../components/books/BookList'
import Loader from '../../components/loader/Loader'

class BooksCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  componentDidMount() {
      this.props.getUserBooks()
  }


  render() {
    return (
      <div className="search-page">
          <div className="search-page-books-container">
          {this.props.isLoading ? <Loader /> : this.props.userBooks.filter(book => book.category === this.props.category).map(book => <BookList key={book.id} currentBook={book}/>)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  userBooks: state.books.userBooks
})

const mapDispatchToProps = dispatch => ({
  getUserBooks: () => dispatch(getUserBooks())
})



export default connect(mapStateToProps, mapDispatchToProps)(BooksCategory);