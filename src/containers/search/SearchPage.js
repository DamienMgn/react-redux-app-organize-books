import React, {Component} from 'react';

import axios from 'axios'

import BookTemplate from '../../components/books/BookTemplate'
import Loader from '../../components/loader/Loader'

import { Input, Button } from 'antd';

import './search-page.css'

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      books: [],
      isLoading: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({isLoading: true})
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.search)
    .then((response) => {
      this.setState({books: response.data.items})
    })
    .then(() => {
      this.setState({isLoading: false})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  render() {

    console.log(this.state.isLoading)
    return (
      <div className="search-page">
          <Input className="search-page-search-bar" placeholder="Rechercher un livre..." onChange={this.handleChange}/>
          <Button type="primary" htmlType="submit" className="sign-form-button" onClick={this.handleSubmit}>Rechercher</Button>
          <div className="search-page-books-container">
            {this.state.isLoading ? <Loader /> : this.state.books.map(book => <BookTemplate key={book.id} currentBook={book}/>)}
          </div>
      </div>
    );
  }
}

export default SearchPage;