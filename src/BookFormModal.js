import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container, ListGroup, Modal } from "react-bootstrap";

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBook: false,
      showModal: false,
    };
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    this.props.postBook(newBook);
    console.log(newBook);
  };

  handleShow = (e) => {
    e.preventDefault();
    this.setState({
      addBook: true,
      showModal: true,
    });
  };

  handleHide = (e) => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    let books = this.props.books.map((book) => (
      <Book key={book._id} book={book} deleteBook={this.props.deleteBook} />
    ));

    return (
      <Container>
        <ListGroup>{books}</ListGroup>

        <>
          <Button onClick={this.handleShow}>ADD</Button>

          <Modal show={this.state.showModal} onHide={this.handleHide}>
            <Modal.Header closeButton>  
              <Modal.Title>Add A Book!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleBookSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>Title: </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="status">
                  <Form.Label>Status: </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button type="submit">
                  Submit!
                </Button>
              </Form>
            </Modal.Body>
            <Button onClick={this.handleHide}>X</Button>
          </Modal>
        </>
      </Container>
    );
  }
}

class Book extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.book.title} 
        {this.props.book.description}
        {this.props.book.status}
        <Button
          variant="dark"
          onClick={() => this.props.deleteBook(this.props.book._id)}
        >
          Remove
        </Button>
      </ListGroup.Item>
    );
  }
}

export default BookFormModal;
