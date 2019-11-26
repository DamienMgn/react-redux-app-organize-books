import React, { Component } from 'react'

import { connect } from 'react-redux'

import { searchBooks } from '../../redux/actions/booksActions'

import BookList from '../../components/books/BookList'
import Loader from '../../components/loader/Loader'

import { Input, Button, Form } from 'antd'

import './search-page.css'

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchBooks(this.state.search);
    this.setState({search: null})
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div className="search-page">
        <Form onSubmit={this.handleSubmit} className="search-page-form" method="POST">
          <Form.Item className="search-page-form-item">
            <Input 
              className="search-page-search-bar"
              placeholder="Rechercher un livre..."
              onChange={this.handleChange}
              value={this.state.search}/>
          </Form.Item>
          <Form.Item className="search-page-form-item">
            <Button
              type="primary"
              htmlType="submit"
              className="search-page-button">
            Rechercher
            </Button>
          </Form.Item>
        </Form>
          <div className="search-page-books-container">
            {this.props.isLoading ? <Loader /> : Object.values(this.props.currentBooks).map(book => <BookList key={book.id} currentBook={book}/>)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentBooks: state.books.currentBooks,
  isLoading: state.books.isLoading
})

const mapDispatchToProps = dispatch => ({
  searchBooks: search => dispatch(searchBooks(search))
})



export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);