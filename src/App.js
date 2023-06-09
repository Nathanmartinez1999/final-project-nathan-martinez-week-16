import { Link, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import React from "react";
import { ButtonGroup } from "react-bootstrap/";
import { Button } from "react-bootstrap/";
import { Container } from "react-bootstrap/";
import { Home } from "./components/Home";
import { Citys } from "./components/Citys";
import { Entertainment } from "./components/Entertainment";
import { Cars } from "./components/Cars";
import { Event } from "./components/Events"

function App() {
  return (


    <Container>

      <ButtonGroup className="btnhome">
        <Button  >
          <Link to="/" className="btnlink">Home</Link >
        </Button>
        <Button>
          <Link to="/citys" className="btnlink">Citys</Link>
        </Button>
        <Button>
          <Link to="/entertainment" className="btnlink">Entertainment</Link>
        </Button>
        <Button  >
          <Link to="/cars" className="btnlink">Automobiles</Link >
        </Button>
        <Button  >
          <Link to="/event" className="btnlink">Significant-Events</Link >
        </Button>
      </ButtonGroup>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citys" element={<Citys />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/Event" element={< Event />} />
      </Routes>


    </Container>

  );
}


export default App