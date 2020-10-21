import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Board} from './pages/Board/Board'
import {Login} from './pages/Login/Login'
import {Register} from './pages/Register/Register'
import {Header} from './components/Header/Header'
import {Boards} from './pages/Boards/Boards'

export const Routes = ({isAuth}) => {
  if (isAuth) {
    return (
      <>
        <Header/>
        <Switch>
          <Route path='/board/:boardId'><Board/></Route>
          <Route path='/boards'><Boards/></Route>
          <Redirect to='/boards'/>
        </Switch>
      </>
    )
  }
  return (
    <Switch>
      <Route path='/login'><Login/></Route>
      <Route path='/register'><Register/></Route>
      <Redirect to='/login'/>
    </Switch>
  )
}
