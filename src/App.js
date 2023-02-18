import './App.css';
import 'react-dropdown-tree-select/dist/styles.css'
import React from "react" 
import About from './pages/about'
import Cards from './pages/cards'
import Header from './pages/header'
import PriceCards from './pages/pricecards'
import Guide from './pages/guide'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Guide></Guide>
      <About></About>
      <Cards></Cards>
      <About></About>
      <PriceCards></PriceCards>
    </div>
  );
}

export default App;
