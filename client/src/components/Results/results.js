// import React, { Component } from "react";
// import API from "../api";
// class results extends Component{
//     handleSave = (id) => {
//         API.saveBook(id).then(res => console.log(res.data))
//     }

//     componentDidMount() {
//     }
    


//     handleDelete = (id) => {
//         API.deleteBook(id).then(() => this.props.getSaved())
//     }
//     handleButton = (id) => {
//         if (this.props.buttonText === "Save") {
//             this.handleSave(id)
//         }
//         else {
//             this.handleDelete(id)
//         }
//     }};
// //     render() {
// //         return ()
// //                 //    <div className="results">
// //                 // <h1>{this.props.status}</h1>

// //                 // {this.props.books.map(book => (
// //                 //     <div className="result-box" key={book.link}>
// //                 //         <hr />

// // //    </div>     
// //     }
// // };        


// // export default results;
import React, { Component } from "react";
import API from "../../utils/api";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                           
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;