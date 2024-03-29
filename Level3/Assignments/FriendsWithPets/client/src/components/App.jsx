import React from 'react';
import FriendsListData from './FWPData';
import Pet from './Pet';
import FriendsList from './FriendsList';
import './App.css';

export default function App() {
    return (
    <div className='fwp-container'>
      <h2 className="title">Friends with Pets Assignment</h2>
      <h4 className='subtitle'>Level 3 sp 216.5</h4>
      <hr className='horizontal-rule-title'/>
      <FriendsList />
    </div>
  )
}


