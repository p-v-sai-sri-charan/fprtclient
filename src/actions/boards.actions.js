import * as api from '../api'
import {
  CREATE_BOARD, EDIT_BOARD,
  FETCH_BOARDS, STAR_BOARD
} from '../types'

export const loadBoards = () => dispatch =>
  api.loadBoards()
    .then(({boards}) => {
      return dispatch({
        type: FETCH_BOARDS,
        boards
      })
    }, e => Promise.reject(e))

export const createBoard = (name) => dispatch =>
  api.createBoard(name)
    .then(({_id}) => {
      return dispatch({
        type: CREATE_BOARD,
        _id,
        name
      })
    }, e => Promise.reject(e))

export const editBoard = (id, name) => dispatch =>
  api.editBoard(id, name)
    .then(() => {
      return dispatch({
        type: EDIT_BOARD,
        name,
        id
      })
    }, e => Promise.reject(e))

export const starBoard = (id, stared) => dispatch =>
  api.starBoard(id, stared)
    .then(() => {
      return dispatch({
        type: STAR_BOARD,
        id,
        stared
      })
    }, e => Promise.reject(e))