import React, { useState } from 'react';
import './FriendForm.css';

const FriendForm = ({ onAddFriend, onDrawPrize, onReset }) => {
  const [name, setName] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleAdd = () => {
    if (name.trim() === '') return;

    onAddFriend(name);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
    setName('');
  };

  return (
    <div className="form">
      <label className="form__label">Enter a friend’s name</label>
      <input
        className={`form__input ${animate ? 'input-animate' : ''}`}
        type="text"
        placeholder="Friend’s name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="form__buttons">
        <button className="button primary" type="button" onClick={handleAdd}>Add</button>
        <button className="button secondary" type="button" onClick={onDrawPrize}>Pick a name</button>
        <a className="form__link" onClick={onReset}>Reset</a>
      </div>
    </div>
  );
};

export default FriendForm;
