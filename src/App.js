// import logo from "./logo.svg";
// import { Button } from "react-bootstrap";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import TheLayout from './layouts/TheLayout'
import './assets/scss/style.scss'

function App() {
  return (
    <>
      <Router>
        <TheLayout />
      </Router>
    </>
  )
}

export default App
