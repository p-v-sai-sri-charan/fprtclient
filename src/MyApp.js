import React from 'react'
import {Routes} from './Routes'
import {connect} from 'react-redux'

function MyApp({auth}) {

  const renderApp = () => {
    return (
      <>
        <Routes isAuth={auth.isAuth}/>
      </>
    )
  }
  const renderApps = () => {
    return (
      <>
        <Routes />
      </>
    )
  }

  return (
    renderApp()
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(MyApp)