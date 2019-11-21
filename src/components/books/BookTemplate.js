import React from 'react';

import './book-template.css'

import image from '../../images/sign-books-img-2.jpeg'

const BookTemplate = ({currentBook}) => {

  return (
    <div className="book-template">
      <img className="book-template-cover" src={image} alt=""/>
      <div className="book-template-information">
        <h3>Author</h3>
        <h4>{currentBook.volumeInfo !== undefined ? currentBook.volumeInfo.title : null}</h4>
        <span>19/06/2019</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque nisi non quibusdam architecto aliquid? Numquam distinctio dolorem consequatur possimus labore et! Atque nostrum quaerat facilis similique ipsa eos ducimus.</p>
      </div>
    </div>
  );
}

export default BookTemplate;