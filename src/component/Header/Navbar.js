import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Content } from '../Content/Content'
export const Navbar = () => {


  function FLink({ to, props }) {
    return <Button component={Link} to={to}>{props}</Button>
  }


  return (
    < >
      <Router>
        <nav>
          <AppBar position="fixed">
            <Toolbar>
              <Button> CJ</Button>
              <FLink to='#' props='Profile' />
              <FLink to='#showcase' props='Showcase' />
              <FLink to='#skill' props='Skill' />
              <FLink to='#contact' props='Contact' />
            </Toolbar>
          </AppBar>
        </nav>
        <Content />

      </Router>

    </>
  )
}



// import React, { useState, useEffect } from "react";
// import "./Navbar.scss";
// import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
// import { Home } from "../Home";
// import { About } from "./About";
// import { Container } from "../Container";

// import Button from '@material-ui/core/Button';

// export function Navbar() {
//   const [nav, setNav] = useState('')

//   useEffect(() => {
//     document.title = nav || 'Home';
//   }, [nav])
//   return (
//     <>
//       <Router>
//         <nav>
//           <Button style={{ color: "white" }} onClick={() => setNav('Home')} component={RouterLink} to="/">
//             Home
//           </Button>
//           <Button style={{ color: "white" }} onClick={() => setNav('Kriptografi')} component={RouterLink} to="/kriptografi" >
//             Kriptografi
//           </Button>
//           <Button style={{ color: "white" }} onClick={() => setNav('About')} component={RouterLink} to="/about" >
//             about
//           </Button>
//         </nav>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/kriptografi">
//             <Container />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   );
// }
