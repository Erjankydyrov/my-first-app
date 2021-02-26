import React from 'react';
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Hochu from './components/Hochu';
import AvtorBooks from './components/AvtorBooks';
import Song from './components/Song';
import Length from './components/Length';
import Uppercase from './components/Uppercase';
import Lowercase from './components/Lowercase';
import Age from './components/Age';
import Year from './components/Year';
import Round from './components/Round';
import Power from './components/Power';
import Water from './components/Water';

function App() {
  return (
    <div className="App">

      <HelloWorld />

      <ByeWorld />

      <Hochu v="more" />

      <AvtorBooks name="Erjan" book="Holi" />

      <Song title="Komuz" name="Danilka" />

      <Length str="Erjan" />

      <Uppercase>hello world</Uppercase>
      <Lowercase>HELLO WORLD</Lowercase>

      <Age year={2000}/>
      <Age year={1967}/>

      <Year age={42} />
      <Year age={22} />

      <Round number={29.999999} />

      <Power number={3} number2={2} />

      <Water wnt = {false} />
      <Water wnt = {true} />

    </div>
  );
}

export default App;