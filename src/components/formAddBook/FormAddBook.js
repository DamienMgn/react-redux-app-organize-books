import React, { Component } from 'react'

import { Button } from 'antd'

import './form-add-book.css'

class FormAddBook extends Component {

  addBook = (category) => {
        this.props.addBook(category);
  }

  deleteBook = () => {
        this.props.deleteBook();
  }

  render() {
    return (
        <div className="form-add-book">
            <Button
              type=""
              className="search-page-button"
              onClick={() => this.addBook(1)}>
            Biliothèque
            </Button>
            <Button
              type="primary"
              className="search-page-button"
              onClick={() => this.addBook(2)}>
            Pile à lire
            </Button>
            <Button
              type="primary"
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
    );
  }
}


export default FormAddBook;