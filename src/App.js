import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import Project from "./component/projects/Projects";
import NotFound from "./component/notfound/NotFound";
import About from "./component/about/About";
import Contacts from "./component/contacts/Contacts";
function App() {
  console.log(!!process.env.REACT_APP_PROJECT_URL );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <div className="plane speed-plane"> </div>
        <div className="plane slow-plane"></div>
        <div className="city-markup"></div>
      </footer>
    </div>
  );
}

export default App;
