import React from 'react';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <div className="friends__container">
      <p className="friends__title">Friends added</p>
      {friends.length === 0 ? <p className='friend_name'>No friends yet</p> : friends.map((friend, index) => (
        <p className='friend_name' key={index}>{friend}</p>
      ))}
    </div>
  );
};

export default FriendList;
