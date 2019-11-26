import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

import './book-list.css'

const BookList = ({currentBook}) => {

  let { url } = useRouteMatch();

  return (
    <Link className="book-list" to={`/${currentBook.id}`}>
      {currentBook.volumeInfo.imageLinks !== undefined ? 
        <img className="book-list-cover" src={currentBook.volumeInfo.imageLinks.thumbnail} alt=""/> :
        <div className="book-list-cover"></div> }
      <div className="book-list-informations">
        <ul className="book-list-informations-authors-list">
          {currentBook.volumeInfo.authors !== undefined ? currentBook.volumeInfo.authors.map(author => <li key={author}><h3>{author}</h3></li>) : null}
        </ul>
        <h4>{currentBook.volumeInfo.title}</h4>
        <span>{currentBook.volumeInfo.publishedDate}</span>
        <p>{currentBook.volumeInfo.description !== undefined ? currentBook.volumeInfo.description.substring(0, 200) + '...' : null}</p>
      </div>
    </Link>
  );
}

export default BookList;