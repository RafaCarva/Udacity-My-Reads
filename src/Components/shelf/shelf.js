import React from 'react'
import PropTypes from 'prop-types'
import Book from '../book/book'
import './shelf.css'

const shelf = (props) => {
  return (

    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li className="books-shelf">
              {props.shelfBooks.map((book, key) => (
                <Book
                  bookTitle={book.title}
                  bookAuthors={book.authors}
                  bookCover={(book.imageLinks)!==(undefined)?(book.imageLinks.smallThumbnail):null}
                  bookShelf={book.shelf}
                  changeBookShelf={props.changeBookShelf}
                  bookId={book.id}
                  bookInstance={book}
                  key={key}
                />
              ))}
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

shelf.propTypes = {
  shelfTitle: PropTypes.string,
  shelfBooks: PropTypes.array,
  changeBookShelf: PropTypes.func
}
export default shelf;

