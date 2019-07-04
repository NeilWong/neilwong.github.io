import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <switch>
        <Route exact path="/" component={Home} />
      </switch>
    </div>
  );
}

export default App;
