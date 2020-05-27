import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  render () {
    const status = 'Next Player: X';

    return (
      <div className='board'>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;
