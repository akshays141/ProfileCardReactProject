import React, { useState } from 'react'
import './Profilecard.css';

const Profilecard = ({name,age,location,bio}) => {

    const [showMore, setShowMore] = useState(false);

    function handleOnClick(){
        setShowMore(!showMore);
        };
    
        const cardStyle={
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            backgroundColor: '#f9f9f9',
            
           };
        
          

  return (
    <div style={cardStyle} className='profile-card'>
    <h1>User Profile</h1>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Location: {location}</p>
    <p>Bio: {showMore? bio :`${bio.substring(0,40)}...`}</p>
    <button onClick={handleOnClick}>{showMore?'Show Less':'Show More'}</button>
    </div>
  );
};

export default Profilecard;