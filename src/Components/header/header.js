import React from 'react'
import {Link} from 'react-router-dom'


const header = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1><Link to='/Home' >MyReads</Link></h1>
      </div>
    </div>
  )
}

export default header