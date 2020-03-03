import React from "react";
import results from "../components/results";
import API from "../api";

class search extends React.Component {
    state = {
        books: [],
        value: ""
    }
    componentDidMount() {
    }
    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }


    
    
   changedinput = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    submit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ books: res.data.items });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    look = bookinfo => {
        return {
            _id: bookinfo.id,
            title: bookinfo.volumeInfo.title,
            authors: bookinfo.volumeInfo.authors,
            description: bookinfo.volumeInfo.description,
            image: bookinfo.volumeInfo.imageLinks.thumbnail,
            link: bookinfo.volumeInfo.previewLink
        }
    }


    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    changedinput={this.changedinput}
                    submit={this.submit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }


};