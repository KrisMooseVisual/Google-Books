import React from "react";
import BookCard from "../BookList/BookCard";

const BookItems = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                    key={i}
                    image={ book.volumeInfo.imageLinks.thumbnail }
                    title={ book.volumeInfo.title }
                    author={ book.volumeInfo.authors }
                    published={ book.volumeInfo.publishedDate }
                    />
                })
            }
        </div>

    )
}

export default BookItems;