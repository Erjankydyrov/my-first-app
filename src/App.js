import "./App.css";
import PersonList from "./components/PersonList/PersonList";

function App() {
  const persons = [
    { name: "Elon Baike", age: 47, hobby: "Ice skating, Eating donuts, Dancing under the moon" },
    { name: "Bill Baike", age: 50, hobby: "Saving the world" }
  ];
  return (
    <div className="App">
      <PersonList persons={persons} />
    </div>
  );
}
export default App;