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

        this.setState({ book_id })
    }


  render() {

    return (
        <div>
            {this.state.book_id}
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