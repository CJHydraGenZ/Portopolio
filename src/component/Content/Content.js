import React from 'react'
import { Profile } from './Path/Profile'
import { Showcase } from './Path/Showcase'
import { Skill } from './Path/Skill'
import { Contact } from './Path/Contact'
import { Switch, Route } from 'react-router-dom'
export const Content = () => {
  return (
    <>

      <Route exact path='/'>
        <Profile />
      </Route>
      <Route path='/showcase'>
        <Showcase />
      </Route>
      <Route path='/skill'>
        <Skill />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>

    </>
  )
}
