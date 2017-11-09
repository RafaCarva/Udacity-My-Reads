import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//API
import * as BooksAPI from '../../Utils/BooksAPI'



class Search extends Component {


  constructor() {
    super();
    this.state={
      booksFound:[],
      query:''
    }
  }

  queryMaker= (event) =>{
    
    this.setState({query:event})
    //console.log(this.state.query)

    
  }


  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/Home' className="close-search">Close</Link>

            <div className="search-books-input-wrapper">

              <input 
                type="text" 
                placeholder="Search by title or author"
                onChange={ event => this.queryMaker(event.target.value)}  
              />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        <h1>SEARCH</h1>

      </div>
    )
  }


}
export default Search;