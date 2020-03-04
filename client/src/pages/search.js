import React from "react";
// jdeld
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

const booksresults = googleApiResults => {
    const bookArray = [];
  
    googleApiResults.map(book => {
  
      const formattedBook = {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        googleId: book.id,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.canonicalVolumeLink
      };
  
      bookArray.push(formattedBook);
      return bookArray
    });
    return bookArray;
  };
  
  class Search extends React.Component {
    state = {
      search: '',
      results: [],
      error: ''
    };
  
    saveBook = event => {
  
      const chosenBook = this.state.results.find(book => book.googleId === event.target.id);
  
      const newSave = {
        title: chosenBook.title,
        authors: chosenBook.authors,
        description: chosenBook.description,
        googleId: chosenBook.googleId,
        image: chosenBook.image,
        link: chosenBook.link
      };
  
      API.saveBook(newSave)
      console.log(newSave);
    };
  
    
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getBooks(this.state.search)
        .then(res => {
          const formattedArray = booksresults(res.data.items);
          this.setState({results: formattedArray});
        })
        .catch(err => console.log(err))
    };
  
    render() {
      return (
        <div className="container">
          
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <Results
            books={this.state.results}
            buttonAction={this.saveBook}
            buttonType="btn btn-success mt-2"
            buttonText="Save Book"
          />
        </div>
      );
    }
  }
  
  export default Search;