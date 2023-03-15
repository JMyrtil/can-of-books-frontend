import React from "react";
import { Button, Modal, Form } from "react-bootstrap";





class BookFormModal extends React.Component {

  render() {



    return (
      <>
        <Modal
          show={this.props.show}
        >
          <Modal.Header>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleBook}>
              <Form.Group controlId="name">
                <Form.Label>Enter Book Title</Form.Label>
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
              <Button type="submit">Add Book</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closemodal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal
