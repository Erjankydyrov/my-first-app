import React from 'react';
import InputLength from './components/InputLength';
import Colors from './components/Colors';
import InputRange from './components/InputRange';
import DollarsInput from './components/DollarsInput';
import FarCell from './components/FarCell';
import SizeInput from './components/SizeInput';
import ColorText from './components/ColorText';
import ColorSliders from './components/ColorSliders';
import Rotate from './components/Rotate';
import Reverse from './components/Reverse';

function App() {

  let FontSize = {}

  return (
    <div className="App">
      <h3>Example1</h3>
      <InputLength value = "text"/>
      <h3>Example2</h3>
      <Colors value = "#f56b6b"/>
      <h3>Example3</h3>
      <InputRange min = {0} max = {10} value = {0}/>
      <h3>Example4</h3>
      <DollarsInput value = {100}/>
      <h3>Example5</h3>
      <FarCell valueC = {50} valueF = {10}/>
      <h3>Example6</h3>
      <SizeInput value = {19} />
      <h3>Example7</h3>
      <ColorText value = "#00ff33"/>
      <h3>Example7</h3>
      <ColorSliders />

      <h3>Homework-1</h3>
      <Rotate value = {0}/>
      <h3>Homework-2</h3>
      <Reverse value = "erjan"/>
    </div>
  );
}

export default App;