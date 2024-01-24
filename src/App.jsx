import { useState } from "react";



import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";


const PLAYERS = {
  X : "Player1",
  O : "Player2"
}

const INITAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveGameBoard(gameTurns){
  let gameBoard = [...INITAL_GAME_BOARD].map((array) => [...array]);
  for(const turn of gameTurns ) {
    const {square , player} = turn;
    const {row , col} = square;
    
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X"
    if( gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O"
    }
    return currentPlayer;
}


function deriveWinner(gameBoard, players) {
  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if( firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol) {

      winner = players[firstSquareSymbol];

    } 

  }
  return winner;
}

function App() {
  const [players, setPlayers]= useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns) =>{
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [ {square : { row : rowIndex, col : colIndex } , player : currentPlayer}  , ...prevTurns];
      return updatedTurns
    })
  }

  const playerActive = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function restartGame(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }

  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol={"X"} isActive={playerActive === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol={"O"} isActive={playerActive === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart= {restartGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
    <Log turns={gameTurns}/>  
    </main>
    
  )
}

export default App
