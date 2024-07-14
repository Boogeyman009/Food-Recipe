
import React from 'react';
import './App.css';
import {Header,searchComp,container} from './styledContainer/style'



function App() {
  return (
    <container>
      <Header>
        <img id='logo' src='foood.jpg' alt='food image'></img>
        <span style={{ paddingLeft: '15px' }}>Food Recipe</span>
        <searchComp>
          <img id='logo' src='search_icon.jpg'/>
          <input></input>
        </searchComp>
      </Header>
    </container>
  );
}

export default App;
