import React from 'react'
import CSSshowCase from '../../../assets/css/showcase.module.css'
import { Grid, Paper } from '@material-ui/core'
export const Showcase = () => {
  return (
    <div id='showcase' className={CSSshowCase.showcase}>
      <strong> Showcase</strong>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} className={CSSshowCase.paper}>KW 1</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} className={CSSshowCase.paper}>KW 2</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={2} className={CSSshowCase.paper}>KW 3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
