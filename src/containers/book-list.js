import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Takes the entire application state  and Whatever is returned from here will show up as props
    //inside BookList
    return {
        books: state.books
    };
    //connection between redux and our component
    //return an object from here

}

export default connect(mapStateToProps)(BookList); //actual connection
//connect takes a function and a component and produces a container
