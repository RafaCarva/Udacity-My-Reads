import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//API
import * as BooksAPI from '../../Utils/BooksAPI'
//Components
import Shelf from '../../Components/shelf/shelf'
import { Debounce } from 'react-throttle'


class Search extends Component {


  constructor() {
    super();
    this.state={
      booksFound:[],
      query:'',
      shelfTitle:'Books Found'
    }
  }

  queryMaker = (event) =>{
    this.setState({query:event})
    this.updateBooksFound(this.state.query)
  }

  /**
   * Call API
   * https://github.com/udacity/reactnd-project-myreads-starter#search
   */
  updateBooksFound = (query) =>{

    if (query === '') {
      this.setState({booksFound:[]})
      return
    }
    BooksAPI.search(query,20).then((result)=>{
      if(result === undefined){
        this.setState({booksFound:[]})
        return
      }
      this.setState({booksFound:result})
      }
    )
  }

  /**
   * Call API
   * https://github.com/udacity/reactnd-project-myreads-starter#update
   */
  changeBookShelf = (bookInstance,newShelf) => {
    BooksAPI.update(bookInstance,newShelf).then(()=>{
      bookInstance.shelf=newShelf
    })
  }

  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/Home' className="close-search">Close</Link>

            <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={ event => this.queryMaker(event.target.value)}  
              />
              </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <Shelf
              shelfTitle = {this.state.shelfTitle}
              shelfBooks = {this.state.booksFound}
              changeBookShelf = {this.changeBookShelf}
              />

            </ol>
          </div>
        </div>
       

      </div>
    )
  }


}
export default Search;