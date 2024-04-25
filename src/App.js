import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color"; // Import the RandomColor component

function App() {
  return (
    <div className="App">
      {/* Accordion component*/}
      <Accordian />

      {/* Random Color component*/}
      <RandomColor />
    </div>
  );
}

export default App;
