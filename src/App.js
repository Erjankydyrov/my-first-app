import React from 'react';
import InputLength from './components/InputLength';
import Colors from './components/Colors';
import InputRange from './components/InputRange';
import DollarsInput from './components/DollarsInput';

function App() {

  return (
    <div className="App">
      <InputLength value = "text"/>
      <Colors value = "#f56b6b"/>
      <InputRange min = {0} max = {10} value = {0}/>
      <DollarsInput value = {100}/>
    </div>
  );
}

export default App;