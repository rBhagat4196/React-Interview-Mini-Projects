import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

const TicTacToe = ({theme}) => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newBoard));
  };

  const renderSquare = (i) => {
    return (
      <button
        className="bg-gray-200 border border-gray-400 hover:bg-gray-300 h-16 w-16"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className='w-[500px] mx-auto'>

    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-1 mt-8">
        {board.map((square, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
      </div>
      <div className={`mt-4 ${theme === "dark" ? "text-white":""}`}>{status}</div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
    </div>
  );
};

export default TicTacToe;
