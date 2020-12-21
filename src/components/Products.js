import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "iphone",
        price: 1000,
      },
      {
        id: 2,
        slug: "samsung",
        name: "samsung",
        price: 4000,
      },
      {
        id: 3,
        slug: "oppo",
        name: "oppo",
        price: 6000,
      },
    ];
    var { match } = this.props;
    console.log(match);
    var url = match.url;
    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id}-{product.name}-{product.price}
          </li>
        </NavLink>
      );
    });
    var {location} = this.props;
    console.log(location);
    return (
      <div className="container">
        <h1>Đây là trang sản phẩm</h1>
        <div class="row">
          <ul className="list-group">{result}</ul>
        </div>
        <div class="row">
          <Route path="/products/:slug" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
