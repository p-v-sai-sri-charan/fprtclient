import * as api from '../api'
import {LOGIN_USER, RESET_USER} from '../types'
import {deleteToken, getPayload, getToken, setToken}
  from '../helpers/token.helper'

export const login = (data) => dispatch =>
  api.login(data)
    .then(({token, userName, userId}) => {
      setToken(token,userId)
      return dispatch({
        type: LOGIN_USER,
        token,
        userId,
        userName,
      })
    }, e => Promise.reject(e))

export const loginFromStore = () => dispatch => {
  if (getToken()) {
    let {userId} = getPayload()
    api.loadUser(userId).then(({user}) => {
      dispatch({
        type: LOGIN_USER,
        token: getToken(),
        userName: user.userName,
        userId,
      })
    })
  } else {
    dispatch({
      type: LOGIN_USER,
      token: ''
    })
  }
}

export const register = (data) => dispatch =>
  api.register(data)
    .then(({token, userName, userId}) => {
      setToken(token,userId)
      dispatch({
        type: LOGIN_USER,
        userId,
        userName,
        token,
      })
    }, e => Promise.reject(e))

export const logout = () => dispatch => {
  deleteToken()
  dispatch({
    type: RESET_USER
  })
}
