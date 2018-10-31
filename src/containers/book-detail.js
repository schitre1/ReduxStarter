import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render () {
        //Application state is completely different from component state, so we can do things like -
        //this.state.ldjfigejga
        //this.setState
        if(!this.props.book) {
            //to handle when the app starts up and state is nill as specified on reducer_active_book.
            return <div>Select a book to get started.</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
                <div>Description: {this.props.book.description}</div>
            </div>
        );
    }
}

//map application state to thios components props
function mapStateToProps(state) {
    return {
        book: state.activeBook 
    }
}

export default connect(mapStateToProps)(BookDetail);