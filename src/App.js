import React from 'react';
import Header from './Components/Header';
import './App.css';
import { render } from '@testing-library/react';
import ClickImage from './Components/ClickImage';


class App extends React.Component {


  render(){
  return (
  <div>
  <Header/>
  <ClickImage />
  </div>
  )
  }
}

export default App;
