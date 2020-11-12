import React, {Component} from 'react';
import './AddAuthorForm.css'

class AuthorForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            'id' : '',
            'imageUrl' : "",
            'books' : [],
            'bookTemp' : ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddBook = this.onAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({[event.target.name ] : event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onAddBook(event) {
        this.setState(
            {
                books : this.state.books.concat([this.state.bookTemp]),
                bookTemp : ''
            }
        );
    }   
    render()
    {
        return(
        <div className="AddAuthorForm">
            <h1>Add an Author</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm__input">
                    <label htmlFor="id">Name</label>
                    <input type="text" name="id" value={this.state.id} onChange={this.onFieldChange} required/>
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} required/>
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="bookTemp">Books</label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type="button" name="addBook" value="+" onClick={this.onAddBook}/>
                </div>
                <input type="submit" value="Add"></input>
            </form>
        </div>
        );
    }
}
export default function AddAuthorForm({match,onAddAuthor}) {
    return (
      <div>        
        <AuthorForm onAddAuthor={onAddAuthor}/>
      </div>
    );    
  }