import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Shelf from './shelf'


const someShelf = {
  'name':'myShelf',
  'books':[{'title':'myTitle',
            'authors':'myAuthors',
            'imageLinks':{'smallThumbnail':'myImgLink'},
            'shelf':'myShelf',
            'changeBookShelf':'myChangeBookShelf',
            'id':'myId',
            'book':'myBook'
          }],
  'changeBookShelf':()=>{}
}


describe('<Shelf />', () => {
  it('Shelf Component should be defined', () =>{
    expect(Shelf).toBeDefined()
  })
})

describe('<Shelf />',() => {
  it('A complete Shelf should be defined',() => {
    const component = shallow(
      <Shelf
        shelfTitle={someShelf.name}
        shelfBooks={someShelf.books}
        changeBookShelf={someShelf.changeBookShelf}
      />
    )
  })
})
