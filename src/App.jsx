import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../page/About";
import Home from "../page/Home";
import Contact from "../page/Contact";
import Portfolio from "../page/Portfolio";
import Design from "../page/Design";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
