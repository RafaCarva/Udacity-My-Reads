import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Book from './book'

const someBook = [{
  "title": "Lords of Finance",
  "subtitle": "The Bankers Who Broke the World",
  "authors": [
    "Liaquat Ahamed"
  ],
  "publisher": "Penguin",
  "publishedDate": "2009-01",
  "description": "Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.",
  "industryIdentifiers": [
    {
      "type": "ISBN_10",
      "identifier": "159420182X"
    },
    {
      "type": "ISBN_13",
      "identifier": "9781594201820"
    }
  ],
  "readingModes": {
    "text": false,
    "image": false
  },
  "pageCount": 564,
  "printType": "BOOK",
  "categories": [
    "Business & Economics"
  ],
  "averageRating": 4.5,
  "ratingsCount": 14,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": false,
  "contentVersion": "1.0.0.0.preview.0",
  "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api",
  "infoLink": "http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC",
  "id": "74XNzF_al3MC",
  "shelf": "wantToRead"

}]



describe('<Book />', () => {
  it('Book Component should be defined', () => {
    expect(Book).toBeDefined()
  })

  it('A complete Book should be defined',() => {
    const component = shallow(
      <Book
      bookTitle={someBook.title}
      bookAuthors={someBook.authors}
      bookCover={someBook.imageLinks}
      bookShelf={someBook.shelf}
      changeBookShelf={someBook.changeBookShelf}
      bookId={someBook.id}
      bookInstance={someBook}
    />
    )
    expect(component).toBeDefined()
  })


})