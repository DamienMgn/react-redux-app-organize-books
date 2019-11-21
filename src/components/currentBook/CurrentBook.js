import React, { Component }from 'react'

import { connect } from 'react-redux'


class CurrentBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBook: {},
            isLoading: true,
            book_id: ''
        }
    }

    componentDidMount() {

        let book_id = this.props.match.params.book_id;

        let currentBook = this.props.currentBooks.find(currentBook => currentBook.id === book_id)

        this.setState({ currentBook ,book_id })
    }

    displayBook () {

        const currentBook = this.state.currentBook

        if (currentBook !== undefined){
            if (currentBook.volumeInfo !== undefined){
                return (
                    <div>
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
                    </div>
                  );
            }
        }
      }

    render() {



        return (
            <div>
                {this.displayBook()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentBooks: state.books.currentBooks
    }
}

export default connect(mapStateToProps)(CurrentBook);