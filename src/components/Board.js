import React from 'react';
import Square from './Square';
const Board = () => {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div>
        <Square value={4} />
        <Square value={5} />
        <Square value={3} />
      </div>
      <div>
        <Square value={1} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </div>
  );
};

export default Board;
