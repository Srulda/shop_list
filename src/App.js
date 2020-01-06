import React, { Component } from 'react';
import Axios from "axios";
import List from './components/List';
import Loading from './components/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
     isLoading : true,
     items : []
    };
  }

  getDataFromDB = async () => {
    let items = await Axios.get(`http://localhost:1912/items`);
    this.state.items = items.data;
    console.log(this.state.items);
  };

  componentDidMount = async () => {
    await this.getDataFromDB();
    this.setState({isLoading : false})
  };

  render() {
    return (
      <div>
        {this.state.loading? 
        <Loading /> 
        :
        <List items ={this.state.items} /> }
      </div>
    );
  }
}

export default App;


