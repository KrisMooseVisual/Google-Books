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
                    title={ book.title }
                    author={ book.authors }
                    published={ book.publishedDate }
                    />
                })
            }
        </div>

    )
}

export default BookItems;