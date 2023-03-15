import axios from "axios";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BookFormModal from './BookFormModal';

const SERVER = process.env.REACT_APP_SERVER;
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      renderBook: false,
    };
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log(`Results: ${results}`);
      this.setState({
        books: results.data,
        renderBook: true,
      });
      console.log(this.statebooks);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  postBook = async (newBook) => {
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      this.getBooks();
      this.setState({
        books: [...this.state.books, createdBook.data],
      })
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }


  deleteBook = async (id) => {
    try {
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url)
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks,
      })
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    let booksArr = this.state.books.map((book) => {
      return (
        <Carousel.Item key={book._id}>
          <img
            className="d-block w-100"
            src="book_img.png"
            alt={book.title}
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>{book.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>{booksArr}</Carousel>
        <BookFormModal
          books={this.state.books}
          postBook={this.postBook}
          deleteBook={this.deleteBook}
        />
      </>
    );
  }
}

export default BestBooks;
