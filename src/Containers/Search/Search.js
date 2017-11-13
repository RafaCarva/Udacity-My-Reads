import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//API
import * as BooksAPI from '../../Utils/BooksAPI'
//Libs
import { PulseLoader } from 'halogenium';
import { Debounce } from 'react-throttle'
//Components
import Shelf from '../../Components/shelf/shelf'

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userBooks: this.props.location.state.books,
      booksFound: [],
      query: '',
      shelfTitle: 'Books Found',
      showLoader: false
    }
  }

  queryMaker = (event) => {
    this.setState({ query: event })
    this.updateBooksFound(this.state.query)
  }

  /**
   * Call API
   * https://github.com/udacity/reactnd-project-myreads-starter#search
   */
  updateBooksFound = (query) => {

    this.setState({ showLoader: true })
    if (query === '') {
      this.setState({ showLoader: false })
      this.setState({ booksFound: [] })
      return
    }
    BooksAPI.search(query, 20).then((result) => {
      if (result === undefined) {
        this.setState({ booksFound: [] })
        return
      }
      if (result.error) {
        this.setState({ booksFound: [] })
        return
      }

      this.setState({ showLoader: false })
      this.setState({ booksFound: this.synchronizeShelf(result) })
    }
    )
  }

  //Synchronize Shelf between state book and found book
  synchronizeShelf = (booksFound) => {


    booksFound.map(foundItem => {

     if(foundItem.shelf === undefined){foundItem.shelf = 'none'}

      this.state.userBooks.map(stateItem =>
        (stateItem.id === foundItem.id) ? (foundItem.shelf = stateItem.shelf) : null
      )
      return true
    })

    return booksFound
  }

  /**
   * Call API
   * https://github.com/udacity/reactnd-project-myreads-starter#update
   */
  changeBookShelf = (bookInstance, newShelf) => {
    BooksAPI.update(bookInstance, newShelf).then(() => {
      bookInstance.shelf = newShelf
    })
  }

  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>

            <div className="search-books-input-wrapper">
              <Debounce time="400" handler="onChange">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={event => this.queryMaker(event.target.value)}
                />
              </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

              <Shelf
                shelfTitle={this.state.shelfTitle}
                shelfBooks={this.state.booksFound}
                changeBookShelf={this.changeBookShelf}
              />

            </ol>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {this.state.showLoader
                ?
                <PulseLoader color="#26A65B" size="16px" margin="4px" />
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Search;