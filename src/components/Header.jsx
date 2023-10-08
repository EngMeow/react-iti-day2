import React, { Component } from 'react'

export  class Header extends Component {
  render() {
    return (
      <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">E-Commerce Again and again</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Under the Authority of Eng. Sara Atef</p>
                    </div>
                </div>
            </header>
      </>
    )
  }
}
