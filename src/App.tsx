import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import Header from './layouts/Header';
function App() {
  return (
    <><Header />
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div></>
  );
}

export default App;
