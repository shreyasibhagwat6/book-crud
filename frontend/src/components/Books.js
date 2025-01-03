import React from 'react'

const Books = ({ books }) => {
  return (
    <>
    {books.map((book) => {
        return( 
          <div>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.genre}</div>
          <div>{book.price}</div>
          </div>
        )})}
    </>
  )
}

export default Books;