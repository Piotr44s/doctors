import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Example from "./pages/Example";
import Read from "./pages/Read";
import Header from "./components/Header"
import Edit from "./pages/Edit";
import "./App.css"


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/read" element={<Read />} />
          <Route path="/example" element={<Example />} />
          <Route path="/edit" element={<Edit />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App