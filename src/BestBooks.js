// import axios from 'axios';
import React from 'react';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  // getBooks = async () => {
  //   try {
  //     let results = await axios.get(`${SERVER}/books`);
  //     this.seteState({
  //       books: results.data,
  //       renderBook:true
  //     })
  //   } catch (error) {
  //     console.log('There was an error: ', error.response.data)
  //   }
  // }

  render() {

    /* TODO: render all the books in a Carousel */
    let notEmpty = this.state.books.map((book, idx) => (
      <Carousel.Item key={idx}>
        <h3>{book.title}</h3>
      </Carousel.Item>
    ))
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.rendreBook &&
          <Carousel>
            <p>Book Carousel coming soon</p>
            <h3>{notEmpty}</h3>
          </Carousel>
        }
      </>
    )
  }
}

export default BestBooks;
