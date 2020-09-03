import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Content } from '../Content/Content'
import { useEffect } from 'react'
import { useState } from 'react'
export const Navbar = () => {

  const [title, setTitle] = useState('CJ')
  useEffect(() => {
    document.title = title
  }, [])

  function FLink({ to, props }) {
    return <Button component={Link} to={to}>{props}</Button>
  }


  return (
    < >
      <Router>
        <nav>
          <AppBar>
            <Toolbar>
              <Button> CJ</Button>
              <FLink to='#profile' props='Profile' />
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



