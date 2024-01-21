import { useState } from "react";



import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";



function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [playerActive, setPlayerActive] = useState('X')


  function handleSelectSquare(rowIndex, colIndex){
    setPlayerActive((curPlayerActive) => curPlayerActive === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) =>{
      let currentPlayer = "X"
      if( prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }
      const updatedTurns = [ {square : { row : rowIndex, col : colIndex } , player : currentPlayer}  , ...prevTurns];
      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player 1"} symbol={"X"} isActive={playerActive === 'X'}/>
          <Player initialName={"Player 2"} symbol={"O"} isActive={playerActive === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
    <Log turns={gameTurns}/>  
    </main>
    
  )
}

export default App
