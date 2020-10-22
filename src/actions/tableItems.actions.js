import * as api from '../api'
import {
  CREATE_TABLE_ITEM, EDIT_TABLE_ITEM,
  MOVE_TABLE_ITEMS
} from '../types'

export const createTableItem = (tableId, text) => dispatch =>
  api.createTableItem(tableId, text)
    .then(({id}) => {
      return dispatch({
        type: CREATE_TABLE_ITEM,
        id,
        text,
        tableId
      })
    }, e => Promise.reject(e))

export const editTableItem = (tableId, id, text) => dispatch =>
  api.editTableItem(id, text)
    .then(() => {
      return dispatch({
        type: EDIT_TABLE_ITEM,
        text,
        id,
        tableId
      })
    }, e => Promise.reject(e))

export const moveTableItems = (itemOneId, itemTwoId,
                               oldIndex, newIndex, tableId) => dispatch =>
  api.moveTableItems(itemOneId, itemTwoId)
    .then(() => {
      return dispatch({
        type: MOVE_TABLE_ITEMS,
        oldIndex,
        newIndex,
        tableId
      })
    }, e => Promise.reject(e))