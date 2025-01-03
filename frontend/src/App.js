import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Books from './components/Books';
function App() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState();
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  }

  const handleSubmit = (e) => {
    axios
    .post("http://localhost:5000/book", {
      title,
      author,
      genre,
      price
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  useEffect(()=> {
    axios
    .get('http://localhost:5000/book')
    .then((res) => {
      setBooks(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  console.log(books);

  if(books.length === 0) {
    return <div>Loading...</div>
  } else{

    return (
      <div>
        <h1>My Library</h1>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type='text' value={title} onChange={handleTitleChange}></input>
          <label>Author</label>
          <input type='text' value={author} onChange={handleAuthorChange}></input>
          <label>Genre</label>
          <input type='text' value={genre} onChange={handleGenreChange}></input>
          <label>Price</label>
          <input type='text' value={price} onChange={handlePriceChange}></input>
          <button>Add Book</button>
        </form>
        <Books books={books} />
      </div>
    )
  }

}

export default App

