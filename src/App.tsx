import React from "react";
import Button from "./components/button";
import css from './App.module.scss'
const App: React.FC = () => {
  return (
    <div className={css.appButton}>
      <Button>content</Button>
    </div>
  );
};

export default App;
