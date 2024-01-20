import React, { useState } from 'react';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  export default function GameBoard(){
const [gameBoard, setGameBoard] = useState(initialGameBoard);
    


function handleClick(rowIndex, colIndex){
    setGameBoard(prevGameBoard => {
    const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    newGameBoard[rowIndex][colIndex] = 'X';
    return newGameBoard;
    })
  }
    
    return (<ol id="game-board">
        
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((PlayerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => handleClick(rowIndex, colIndex)}>{PlayerSymbol}</button></li>)}
            </ol>
        </li>)} 

    </ol> )
  }