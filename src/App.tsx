import React from "react";
import Button from "./components/button";
const App: React.FC = () => {
  return (
    <div className="App">
      <Button btnType='flower' className='appButton'>content</Button>
    </div>
  );
};

export default App;
