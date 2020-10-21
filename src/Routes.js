import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Header} from './components/Header/Header'

export const Routes = ({isAuth}) => {
  if (isAuth) {
    return (
      <>
        <Header/>
        <Switch>
        </Switch>
      </>
    )
  }
  return (
    <Switch>
    </Switch>
  )
}
