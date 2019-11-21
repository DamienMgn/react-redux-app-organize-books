import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

import './book-template.css'

const BookTemplate = ({currentBook}) => {

  let { url } = useRouteMatch();

  return (
    <Link className="book-template" to={`${url}/${currentBook.id}`}>
      {currentBook.volumeInfo.imageLinks !== undefined ? 
        <img className="book-template-cover" src={currentBook.volumeInfo.imageLinks.thumbnail} alt=""/> :
        <div className="book-template-cover"></div> }
      <div className="book-template-informations">
        <ul className="book-template-informations-authors-list">
          {currentBook.volumeInfo.authors !== undefined ? currentBook.volumeInfo.authors.map(author => <li key={author}><h3>{author}</h3></li>) : null}
        </ul>
        <h4>{currentBook.volumeInfo.title}</h4>
        <span>{currentBook.volumeInfo.publishedDate}</span>
        <p>{currentBook.volumeInfo.description !== undefined ? currentBook.volumeInfo.description.substring(0, 200) + '...' : null}</p>
      </div>
    </Link>
  );
}

export default BookTemplate;