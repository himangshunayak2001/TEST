import './App.css';
import React from 'react';
import Tab from "./Component/Tab";

const App = () => {

  const tab = [
    {
      title : "Tab 1",
      content : "Tab 1",
    },
    {
      title : "Tab 2",
      content : "Tab 2",
    },
    {
      title : "Tab 3",
      content : "Tab 3",
    },
  ];
  return (
    <div className="App">
      <h1> Output </h1>
      <Tab {props} />
    </div>
  );
};

export default App;
