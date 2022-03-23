import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "./layouts/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
