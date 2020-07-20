import React, { Component } from 'react';
import swal from 'sweetalert';

class MonthItem extends Component {
  handleClick = (event) => {
    swal({
      title: 'Month List Alert System',
      text: `You clicked ${this.props.item.name}!`,
      icon: 'success',
    });
  };

  render() {
    return <p onClick={this.handleClick}>{this.props.item.name}</p>;
  }
}

export default MonthItem;
