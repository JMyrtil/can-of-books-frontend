import axios from "axios";
import React from "react";
import { Carousel } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      renderBook: false,
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    let serverData = process.env.REACT_SERVER;
    try {
      let results = await axios.get(`${serverData}/book`);
      this.seteState({
        books: results.data,
        renderBook: true,
      });
    } catch (error) {
      console.log("There was an error: ", error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    let booksArr;
    booksArr = this.state.books.map((book) => {
      return (
        <Carousel.Item key={book._id}>
          <Carousel.Caption>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.renderBook && <Carousel>{booksArr}</Carousel>}
      </>
    );
  }
}

/* TODO: render all the books in a Carousel 
    let notEmpty = this.state.books.map((book, idx) => {
      if (idx === isNaN) {

        this.state.renderBook &&
          <Carousel.Item key={idx}>
            <h3>{book.title}</h3>
          </Carousel.Item>

      } else if (idx >= 0) {
        <Carousel.Item key={idx}>
          <h3>{book.title}</h3>
        </Carousel.Item>
      }
      return notEmpty;
    })
    */

export default BestBooks;
