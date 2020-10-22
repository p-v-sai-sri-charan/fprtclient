import * as api from '../api'
import {LOAD_USER} from '../types'

export const loadUser = (id) => dispatch =>
  api.loadUser(id)
    .then(({token, userName, userId,}) => {
      dispatch({
        type: LOAD_USER,
        userId,
        userName,
        token,
      })
    }, e => Promise.reject(e))