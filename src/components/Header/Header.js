import react, { Component } from 'react';

class Header extends Component {
  render() {
    const monthClicked = this.props.item.name;

    return (
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>{monthClicked} </h3>
        <br />
      </header>
    );
  }
}

export default Header;
