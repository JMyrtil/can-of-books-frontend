import axios from "axios";
import React from "react";
import BookFormModal from "./BookFormModal";
import { Button, Carousel, Container, Form, Modal } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      renderBook: false,
      showModal: false
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

  postBooks = async (newBook) => {
    let postServer = process.env.REACT_SERVER;
    try {
      let postUrl = (`${postServer}/book`);
      let addBook = await axios.post(postUrl, newBook);
      this.getBooks()
      this.setState({
        books: [...this.state.books, addBook.data]
      })
    } catch (error) {
      console.log("There was an error: ", error.response.data);
    }
  };

  removeBooks = async (id) => {
    let server = process.env.REACT_SERVER;
    try {
      let removeUrl = (`${server}/book/${id}`);
      await axios.delete(removeUrl);
      let updateBook = this.state.books.filter(book => book.id !== id)
      this.setState({
        books: updateBook
      });
    } catch (error) {
      console.log("There was an error: ", error.response.data);
    }
  };

  handleBook = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value
    }
    this.postBooks(newBook)
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  }

  componentDidMount() {
    this.getBooks();
  }



  render() {
    let booksArr;
    // booksArr = this.state.books.map((book) => {
    //   return (
    //     <Carousel.Item key={book._id}>
    //       <Carousel.Caption>
    //         <h2>{book.title}</h2>
    //         <p>{book.description}</p>
    //         <p>{book.status}</p>
    //       </Carousel.Caption>
    //       <Button
    //         onClick={() => this.removeBooks(book._id)}
    //       >
    //         Remove Book
    //       </Button>
    //     </Carousel.Item>
    //   );
    // });

    return (
      <>
        <Container>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
          {/* {
            this.state.renderBook &&
            <Carousel>
              {booksArr}
            </Carousel>
          } */}
            {/* <Form> */}
              <BookFormModal
                show={this.state.showModal}
                closemodal={this.handleCloseModal}
                books={this.state.books}
                removeBooks={this.removeBooks}
              />
            {/* </Form> */}
            <Button type="submit" onClick={this.handleOpenModal}>Add Book</Button>
        </Container>
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
