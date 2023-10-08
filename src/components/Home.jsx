import React, { Component } from 'react'
import Book from './book'
import {Bookslist} from './models/BooksList'
export  class Home extends Component {
   
    render() {
    return (
      <>
        <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Let's go shopping</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Under the Authority of Eng. Sara Atef</p>
                    </div>
                </div>
            </header>
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Bookslist.map((book) => <Book key={book.id} bookDetails={book}/>)}
            </div>
        </div>
        </section>

      </>
    )
  }
}
