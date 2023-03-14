import React from "react";
import { Button, Modal, Form } from "react-bootstrap";





class BookFormModal extends React.Component {

  render() {



    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Temp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleBook}>
              <Form.Group controlId="name">
                <Form.Label>Enter Book Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button type="submit">Add Book</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal
