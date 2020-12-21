import React, { Component } from "react";

class Product extends Component {
  render() {
    var { match } = this.props;
    // console.log(match);
    var name = match.params.slug;
    console.log(name);
    return <div>Đây là trang chi tiết sản phẩm</div>;
  }
}

export default Product;
