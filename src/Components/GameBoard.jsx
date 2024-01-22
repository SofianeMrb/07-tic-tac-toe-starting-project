




  export default function GameBoard({onSelectSquare , board}){
    

    



/* const [gameBoard, setGameBoard] = useState(initialGameBoard);
    


function handleClick(rowIndex, colIndex){
    setGameBoard(prevGameBoard => {
    const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    return newGameBoard;
    })
    onSelectSquare();
  } */
    
    return (<ol id="game-board">
        
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((PlayerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() =>onSelectSquare(rowIndex, colIndex)} disabled={PlayerSymbol !== null}>{PlayerSymbol}</button></li>)}
            </ol>
        </li>)} 

    </ol> )
  }