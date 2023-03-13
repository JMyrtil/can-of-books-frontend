// import axios from 'axios';
import React from 'react';

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
  //       books: results.data
  //     })
  //   } catch(error) {
  //     console.log('There was an error: ', error.response.data)
  //   }
  // }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
