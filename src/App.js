import React from 'react';
import './App.css';
import NavigationMenu from './navigation/navigationMenu';
// import Card from './card/card';
function App() {
  return (
    <div className="App">
      <NavigationMenu />
      {/* <Card
        description="This is a random image I found using unsplash.it by putting in the desired dimensions of what I wish to acquire. Pretty cool, huh? Also my doggy is cute."
        imageName="test.jpg"
      /> */}
    </div>
  );
}

export default App;
