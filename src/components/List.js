import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

//   componentDidMount = async () => {
//     await this.getDataFromDB();
//   };

//   getDataFromDB = async () => {
//     let items = await Axios.get(`http://localhost:1912/items`);
//     this.state.items = items.data;
//     console.log(this.state.items);
//   };

  inputHandler = e => this.setState({ [e.target.id]: e.target.value });

//   addItem = () =>{

//   }

  render() {
    return (
      <div>
        <input type="text" id="searchInput" onChange={this.inputHandler} />
        <button onClick = {this.addItem} >add</button>
        {this.props.items.length?
         this.props.items.map(i=> (
            <li key = {i.id}>{i.item}</li>
        )
         ) : null
         }
      </div>
    );
  }
}

export default List;
