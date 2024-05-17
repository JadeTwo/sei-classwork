import { useState, createContext } from "react";
import "./App.css";
import Parent from "./components/Parent";

const FamilyContext = createContext()

function App() {

  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "blue",
  });

  function changeStyle() {
    let newStyle = {
      color: style.color === "white" ? "black" : "white",
      backgroundColor: style.backgroundColor === "blue" ? "red" : "blue",
    };
    setStyle(newStyle);
  }

  return (
      <div>
        <button onClick={changeStyle}>Change</button>
        <br />
        <br />
        <span style={style}>GrandParent (App)</span>
        <br />
        <br />
        <Parent style={style} changeStyle={changeStyle} />
      </div>
  );
}

export default App;
