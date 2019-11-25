import React, { Component } from 'react'

import { Button } from 'antd'

import './form-add-book.css'

class FormAddBook extends Component {

  handleClick = (category) => {
        this.props.addBook(category);
  }

  render() {
    return (
        <div className="form-add-book">
            <Button
              type=""
              className="search-page-button"
              onClick={() => this.handleClick(1)}>
            Biliothèque
            </Button>
            <Button
              type="primary"
              className="search-page-button"
              onClick={() => this.handleClick(2)}>
            Pile à lire
            </Button>
            <Button
              type="primary"
              className="search-page-button"
              onClick={() => this.handleClick(3)}>
            Wish list
            </Button>
            <Button
              type="danger"
              className="search-page-button">
            Supprimer
            </Button>
        </div>
    );
  }
}


export default FormAddBook;