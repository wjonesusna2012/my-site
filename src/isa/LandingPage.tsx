import React from 'react';
import IsAComponent from './isAComponent';
const adjectivesList = [
  'a Blockchain Guru',
  'a Bouldering Expert',
  'an Innovative Leader',
  'a Full-Stack Developer',
];
const LandingPage = () => {
  return (
    <div style={{ 
      position: 'static', 
      width: "70%", 
      maxHeight: "50%", 
      left: "15%", 
      top: "25%",
      border: "3px solid grey",
      borderRadius: 25,
      overflow: 'hidden',
    }}>
      <IsAComponent
        name="William Jones"
        adjectives={adjectivesList}
        cursorInterval={400}
        typingInterval={150}
        startFlashes={2}
        endFlashes={1}
      />
    </div>
  )
}

export default LandingPage;