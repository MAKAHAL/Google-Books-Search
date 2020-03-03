import React from "react";
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function(e) {
        this.setState({saved: true});
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        e.preventDefault();
        API.addBookToDB(bookData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({deleted: true});
        e.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="bookResult" id={(this.props.id)? this.props.id: null} style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>{this.props.title}</h4>
                        <p>By: {(this.props.authors)? this.props.authors.join(", "): "N/A"}</p>
                    </div>
                    <div className="btnDiv">
                        {
                            // if link to book exists include View button else do not
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null
                        }
                        {
                            // if this.props.path is "/" display save button else display Delete button
                            (this.props.path === "/")? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">
                    {(this.props.img)? <img src= {
                        // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                        (this.props.img.smallThumbnail)? this.props.img.smallThumbnail:
                        (this.props.img.thumbnail)? this.props.img.thumbnail: ""
                    } alt="book cover"/>: null}
                    <p>{(this.props.description)? this.props.description: "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default Result;


















// // export default results;
// import React, { Component } from "react";
// import API from "../../utils/api";

// class Results extends Component {

//     state = {
//         savedBooks: [],
//     }

//     componentDidMount() {
//         API.savedBooks()
//             .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//             .catch(err => console.error(err));
//     }

//     handleSave = book => {

//         if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
//             API.deleteBook(book._id)
//                 .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
//                 .catch(err => console.error(err));
//         } else {
//             API.saveBook(book)
//                 .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
//                 .catch(err => console.error(err));
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {!this.props.books.length ? (
//                     <h1 className="text-center">No Results to Display</h1>
//                 ) : (
//                         <div>
//                             {this.props.books.map(result => (
//                                 <div className="card mb-3" key={result._id}>
//                                     <div className="row">
//                                         <div className="col-md-2">
                                           
//                                         </div>
//                                         <div className="col-md-10">
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{result.title} by {result.authors}</h5>
//                                                 <p className="card-text">{result.description}</p>
//                                                 <div>
//                                                     <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
//                                                     <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
//                                                         {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//             </div>
//         )
//     }
// }

// export default Results;