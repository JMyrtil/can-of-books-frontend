import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container, Modal } from "react-bootstrap";

class UpdateBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBook: false,
      showModal: false,
    };
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let bookUpdated = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBook(bookUpdated);
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


    return (
      <>
        <Container>


          <Modal show={this.state.showModal} onHide={this.handleHide}>
            <Modal.Header closeButton>
              <Modal.Title>Update A Book!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleBookSubmit}>
                <Form.Group controlId="title">
                  <Form.Label>Title: </Form.Label>
                  <Form.Control type="text" placeholder={this.props.book.title} />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control type="text" placeholder={this.props.book.description} />
                </Form.Group>
                <Form.Group controlId="status">
                  <Form.Label>Status: </Form.Label>
                  <Form.Control type="text" placeholder={this.props.book.status} />
                </Form.Group>
                <Button type="submit">
                  Update!
                </Button>
              </Form>
            </Modal.Body>
            <Button onClick={this.handleHide}>X</Button>
          </Modal>

        </Container>

        <Button
          variant="primary"
          onClick={this.handleShow}
        >
          Update
        </Button>
      </>
    );
  }
}

export default UpdateBookModal;

