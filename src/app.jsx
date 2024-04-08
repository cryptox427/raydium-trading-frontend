import React from "react";
import ReactDOM from "react-dom";
import Home from './pages/home';

const App = () => {
  return (
    <Home
    />
  );
};

(async () => {
  ReactDOM.render(<App />, document.body);
})();
