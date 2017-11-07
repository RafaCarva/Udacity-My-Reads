import React, { Component } from 'react'
import * as BooksAPI from '../../Utils/BooksAPI'
import {Link} from 'react-router-dom'
//components
import Header from '../../Components/header/header'
import Shelf from '../../Components/shelf/shelf'

class Home extends Component {

  constructor() {
    super();

    this.state = {
      books: [],
      shelves:[
        {name:'Read', filterProp:'read' },
        {name:'Want to Read',filterProp:'wantToRead'},
        {name:'Currently Reading',filterProp:'currentlyReading'}
       ]
    }

   // this.shelfGenerator = this.shelfGenerator.bind(this)
   // this.changeBookShelf = this.changeBookShelf.bind(this)
  }


  //buscar todos os livros e setalos no state
  componentDidMount() {
    BooksAPI.getAll().then(res => {
      //console.log("componrntDidMount",res)
      this.setState({ books: res })
    })
  }

/**
 * 
 */
shelfGenerator = (item) =>{
console.log("SHELGENERATOR()");
  const filteredBooks = this.state.books.filter( (book) => {

    //console.log("1-->",book.shelf);
   // console.log("2-->",item.filterProp); 
    return book.shelf === item.filterProp 
  } )

  //console.log("****",filteredBooks)
  //console.log("****typeof",typeof(filteredBooks))
  return filteredBooks

}
  
/**
 * Function for select onChange in <Book>.
 * This function will call the 'update' method:
 * https://github.com/udacity/reactnd-project-myreads-starter
 */
changeBookShelf = (bookInstance,newShelf ) => {


  BooksAPI.update(bookInstance,newShelf).then(() => {

    bookInstance.shelf = newShelf
    this.setState({
      books: this.state.books.filter((b)=>
    b.id != bookInstance.id).concat([bookInstance])
    })


  })
} 

 

  render() {
    
    return (
      <div className="app">
        <Header />

        {/*shelfes*/}
        { this.state.shelves.map( (item, key) =>(
            <Shelf 
              shelfTitle={item.name} 
              shelfBooks={this.shelfGenerator(item)} 
              changeBookShelf={this.changeBookShelf}
              key={key}/>
         ))
        }


        <div className="open-search">
          <Link to='/Search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default Home;