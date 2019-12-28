import React, { Component } from "react";
import SearchBar from "../Search/searchBar";
// import request from "superagent";
import axios from "axios";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBox: ""
        }

    }

    //Method to get request from Googles API using superagent.
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        console.log({ [name]: value })
    }
    // bookSearch = () => {
    //e.preventDefault stops forms making request to a server that does not exist.

    // axios
    //     .get("https://www.googleapis.com/books/v1/volumes?q=")
    //     //Superagent allows method .query to pass queries to request.
    //     .query({ q: this.searchBox })
    //     console.log("query")
    //     .then((data) => {
    //         console.log(data);
    //     })
    // }

    //Grabbing "event" for method 
    searchBtn = (event) => {
        event.preventDefault();
        const { searchBox } = this.state;
        // console.log(e.target.value);
        this.setState({ searchBox: searchBox })
        console.log(searchBox)
        this.runAPI();
    }

    runAPI = () => {
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchBox)
        //Superagent allows method .query to pass queries to request.
        .then((data) => {
            this.setState({ books: data})
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                <SearchBar handleInputChange={this.handleInputChange} searchBtn={this.searchBtn} />
            </div>
        );
    }
}

export default Books;