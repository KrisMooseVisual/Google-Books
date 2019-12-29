import React, { Component } from "react";
import SearchBar from "../Search/searchBar";
import BookItems from "../BookList/BookItems";
import axios from "axios";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBox: ""
        }

    }

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

        .then((data) => {
            this.setState({ books: [data]})
            console.log(data);
        })
    }

    // Method to get request from Googles API using superagent.
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        console.log({ [name]: value })
    }

    render() {
        return (
            <div>
                <SearchBar handleInputChange={this.handleInputChange} searchBtn={this.searchBtn} />
                <BookItems books={this.state.books}/>
            </div>
        );
    }
}

export default Books;