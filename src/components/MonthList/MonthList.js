import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
  render() {
    let monthArray = this.props.monthList.map((item, index) => {
      return (
        <div key={index}>
          <MonthItem item={item} />
        </div>
      );
    });
    return <div>{monthArray}</div>;
  }
}

export default MonthList;
