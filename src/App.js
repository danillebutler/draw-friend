import React, { useState } from 'react';
import './App.css';
import HeaderImage from './components/HeaderImage';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';
import PrizeDraw from './components/PrizeDraw';
import Footer from "./components/Footer";

function App() {
  const [friends, setFriends] = useState([]);
  const [prize, setPrize] = useState('');

  const addFriend = (name) => setFriends([...friends, name]);
  const drawPrize = () => {
    if (friends.length > 0) {
      const winner = friends[Math.floor(Math.random() * friends.length)];
      setPrize(winner);
    }
  };
  const resetGame = () => {
    setFriends([]);
    setPrize('');
  };

  return (
    <div className="App">
      <HeaderImage />
      <FriendForm 
        onAddFriend={addFriend} 
        onDrawPrize={drawPrize} 
        onReset={resetGame}/>
      <div className="section--results">
        <FriendList friends={friends} />
        <PrizeDraw prize={prize} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
