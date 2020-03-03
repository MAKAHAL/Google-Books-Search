
import React from "react";
import Results from "../components/Results";
import API from "../api";
class saved extends React.Component {
    state = {
        saved:[]
        
}
componentDidMount() {
    this.getsaved()
}
getSaved = () => {
    API.getAllBooks()
       .then(res => {
           this.setState({saved: res.data})
       })
}
render() {
    return (
        <div className="container">
            <h2>Saved books</h2>
            <Results books={this.state.saved} />
        </div>
    )
    }
};