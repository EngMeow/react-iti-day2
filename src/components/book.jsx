import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    let {bookDetails:{name,price}} = this.props
    return (
      <div>
        <div className="col mb-5">
                <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                    <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{name}</h5>
                    {/* Product price*/}
                      {price}$
                    </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Buy now</a></div>
                </div>
                </div>
            </div>
      </div>
    )
  }
}
