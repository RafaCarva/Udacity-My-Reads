import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const header = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>
          <Link to='/' className="link-header">
            MyReads
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default header