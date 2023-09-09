import React from 'react';
import IsAComponent from './isAComponent';
const adjectivesList = [
  'a Blockchain Bandito',
  'an Express Expert',
  'a Fluent Financial Analyst',
  'a Full-Stack Sage',
  'a Machine Language Mentor',
  'a MySQL Maestro',
  'a Navy Submarine Veteran',
  'a Node.js Navigator',
  'a Nuclear Engineer',
  'a Python Practitioner',
  'a React Renegade',
  'a Rock Climbing Cavalier',
  'a Saavy Salsero',
];
const LandingPage = () => {
  return (
    <div style={{
      overflow: 'hidden',
      position: 'relative',
      borderRadius: 10,
      top: '10em',
      left: '10%',
      opacity: '0.85',
      width: '80%',
    }}>
      <IsAComponent
        name="William Jones"
        adjectives={adjectivesList}
        cursorInterval={800}
        typingInterval={40}
        startFlashes={2}
        endFlashes={3}
        continuous
      />
    </div>
  )
}

export default LandingPage;
