import React, { useState } from 'react';
import './BooksForm.css';

function BooksForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookList, setBookList] = useState([]);
  const [setSelectedBook] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, isbn };
    setBookList([...bookList, newBook]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleDeleteBook = (book) => {
    const newBookList = bookList.filter((item) => item !== book);
    setBookList(newBookList);
    setSelectedBook(null);
  };

  const handleRemoveAllBooks = () => {
    setBookList([]);
    setSelectedBook(null);
  };

  return (
    <div style={{ }}>
      <div className='heading'>
        <h1>Library mangement system</h1>

      </div>
      <div className='App13'>

        <div className='Box'>
          <form className='formbox' onSubmit={handleSubmit}>
            <div className='con'>
              <label>
                Title:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              </label>
              <br />
              <label>
                writer:
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
              </label>
              <br />
              <label>
                Book Number
                <input type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} />
              </label>
              <br />
              <button className='addbut' type="submit">Add Book</button>
            </div>
          </form>
        </div>
        <br />
        <div className='App12'>
          <table>
            <thead>
              <tr>
                <th>Booktitle</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>To Do</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index} onClick={() => handleBookSelect(book)}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <button onClick={() => handleDeleteBook(book)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleRemoveAllBooks}>Remove All</button>
         
        </div>
      </div>
    </div>
  );
}

export default BooksForm;