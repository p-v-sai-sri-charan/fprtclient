import React from 'react'
import {Routes} from './Routes'
import {connect} from 'react-redux'
import {Spinner} from './components/Spinner/Spinner'

function TrelloApp({auth}) {

  const renderApp = () => {
    return (
      <>
        <Routes isAuth={auth.isAuth}/>
      </>
    )
  }

  return (
    auth.isResolved ? renderApp() : <Spinner/>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(TrelloApp)