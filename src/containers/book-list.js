import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
//bindActionCreators ensures that the action flows through all the reducers in the application.

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
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

//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
    //whenever selectBook is called the result should be passed to all of our reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch);
    //now inside our container we can call this.props.selectBook specifically becoz of the property here.
}

//Promote BookList from component to container, it needs to know about this new dispatch method, selectBook. Make it
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //actual connection
//connect takes a function and a component and produces a container
//container is a component that is aware of the state that is contained by redux.
