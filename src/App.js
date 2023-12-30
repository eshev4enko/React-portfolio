import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./paages/Home";
import Detail from "./paages/Detail";
import Footer from "./components/Footer/Footer";

import Projects from "./paages/Projects";
import Contacts from "./paages/Contacts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

import '../src/styles/main.css';

function App() {
  return (
      <div className="App">
          <Router>
            <ScrollToTop />
            <Navbar />
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/detail/:id" element={<Detail />}></Route>
                  <Route path="/contacts" element={<Contacts />}></Route>
              </Routes>
            <Footer/>
          </Router>
      </div>
  );
}

export default App;
