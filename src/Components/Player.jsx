import { useState } from "react";


export default function Player({initialName, symbol, isActive}){
  const[playerName, setPlayerName]= useState(initialName);
  const [isEditing, setIsEditing] = useState(false)

  function handleEdit(){
    setIsEditing((edited)=> !edited);
  }
  function handleChange(event){
  setPlayerName(event.target.value);
}
  
    return(<li className={isActive ? "active" : undefined}>
        <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
          
        <span className="player-symbol">{symbol}</span>
        </span>
        {isEditing ? <button onClick={handleEdit}>Save</button> : <button onClick={handleEdit}>Edit</button>}
        
      </li>
      );
}