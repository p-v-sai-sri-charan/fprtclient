import * as api from '../api'
import {
  CREATE_TABLE, EDIT_TABLE,
  FETCH_TABLES, MOVE_TABLES
} from '../types'

export const loadTables = (boardId) => dispatch =>
  api.loadTables(boardId)
    .then(({tables}) => {
      return dispatch({
        type: FETCH_TABLES,
        tables
      })
    }, e => Promise.reject(e))

export const createTable = (boardId, name) => dispatch =>
  api.createTable(boardId, name)
    .then(({_id}) => {
      return dispatch({
        type: CREATE_TABLE,
        _id,
        name
      })
    }, e => Promise.reject(e))

export const editTable = (id, name) => dispatch =>
  api.editTable(id, name)
    .then(() => {
      return dispatch({
        type: EDIT_TABLE,
        name,
        id
      })
    }, e => Promise.reject(e))

export const moveTables = (tableOneId, tableTwoId,
                           oldIndex, newIndex) => dispatch =>
  api.moveTables(tableOneId, tableTwoId)
    .then((id) => {
      return dispatch({
        type: MOVE_TABLES,
        oldIndex,
        newIndex
      })
    }, e => Promise.reject(e))
