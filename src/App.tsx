import React from "react";
import NavBar from "./components/Navbar";
import Domains from "./components/Domains";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="px-10 py-8">
        <Domains />
      </div>
    </div>
  );
};

export default App;
