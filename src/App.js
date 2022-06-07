import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App