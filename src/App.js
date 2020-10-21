import React from "react";
import "./App.css";
import ThemeBar from "./Comp/ThemeBar";
import modes from "./Comp/modes";
import Feed from "./Comp/Feed";

const App = () => {
  return (
    <div>
      <Feed />
      <ThemeBar modes={modes} />
    </div>
  );
};

export default App;
