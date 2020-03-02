import React, { Component } from "react";
import API from "../api";
class results extends Component{
    handleSave = (id) => {
        API.saveBook(id).then(res => console.log(res.data))
    }

    componentDidMount() {
    }
    


    handleDelete = (id) => {
        API.deleteBook(id).then(() => this.props.getSaved())
    }
    handleButton = (id) => {
        if (this.props.buttonText === "Save") {
            this.handleSave(id)
        }
        else {
            this.handleDelete(id)
        }
    }
    render() {
        return (
                   <div className="results">
                <h1>{this.props.status}</h1>

                {this.props.books.map(book => (
                    <div className="result-box" key={book.link}>
                        <hr />

   </div>             
}

export default results;