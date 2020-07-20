import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
class App extends Component {
  state = {
    monthList: [],
  };

  componentDidMount() {
    this.getMonth();
  }

  getMonth() {
    axios
      .get('/calendar')
      .then((response) => {
        this.setState({
          monthList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('oh no we have an error in get');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>I tried stretch and FAILED!!! LOL....Came close though?</h3>
          <br />
        </header>
        <br />
        <MonthList monthList={this.state.monthList} />
      </div>
    );
  }
}

export default App;
