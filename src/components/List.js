import React, { Component } from "react";
import Axios from "axios";

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      hi: "hello world"
    };
  }

  getDataFromDB = async () => {
    let items = await Axios.get(`http://localhost:1912/items`);
    this.state.items = items.data;
    console.log(this.state.items);
    console.log(this.state.hi);
  };

  render() {
    return (
      <div>
        <div onClick={this.getDataFromDB}>{this.state.hi}</div>
      </div>
    );
  }
}

export default List;
