import React from 'react'
import PropTypes from 'prop-types'
import Book from '../book/book'


const shelf = (props) => {
  return (

    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li style={{ display: 'flex', flexWrap: 'wrap' }}>
              {props.shelfBooks.map((book, key) => (
                <Book
                  bookTitle={book.title}
                  bookAuthors={book.authors}
                  bookCover={book.imageLinks.smallThumbnail}
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

