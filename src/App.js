import React from 'react';
import List from './components/List';
import OrderedList from './components/OrderedList';
import Root from './components/Root';
import SquareList from './components/SquareList';
import Table from './components/Table';
import Wealth from './components/Wealth';

function App() {
  let richPeople = ["Elon Musk", "Jeff Besos", "Bill Gates"];

  let peopleWealth = [
    {name: "Elon Musk", wealth: 19283712 },
    {name: "Jeff Besos", wealth: 19283712 },
    {name: "Bill Gates", wealth: 19283712 }
  ]

  let numbers = [4, 6, 1, 9, 2]

  return (
    <div className="App">
      <List items={richPeople} />
      <OrderedList items={richPeople} />
      <SquareList items={richPeople} />
      <Wealth items={peopleWealth} />
      <Table items={peopleWealth} />
      <Root items={numbers} />
    </div>
  );
}

export default App;