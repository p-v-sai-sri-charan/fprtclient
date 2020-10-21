import {
  CREATE_TABLE, CREATE_TABLE_ITEM,
  EDIT_TABLE, EDIT_TABLE_ITEM,
  FETCH_TABLES, MOVE_TABLE_ITEMS,
  MOVE_TABLES
} from '../types'

import arrayMove from 'array-move'

const defaultState = []

const initTables = () => {
  const tables = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_TABLES:
        return [...action.tables]
      case CREATE_TABLE:
        const table = {
          _id: action._id,
          name: action.name,
          items: []
        }
        return [...state, table]
      case EDIT_TABLE: {
        const prev = state.slice()
        const ind = prev.findIndex(el => el._id === action.id)
        prev[ind].name = action.name
        return [...prev]
      }
      case MOVE_TABLES: {
        return [...arrayMove(tables, action.oldIndex, action.newIndex)]
      }
      case CREATE_TABLE_ITEM: {
        const prev = state.slice()
        const indTable = prev.findIndex(el => el._id === action.tableId)
        const newItem = {
          id: action.id,
          text: action.text
        }
        prev[indTable].items.push(newItem)
        return [...prev]
      }
      case EDIT_TABLE_ITEM: {
        const prev = state.slice()
        const indTable = prev.findIndex(el => el._id === action.tableId)
        const indItem = prev[indTable].items.indexOf(el => el._id === action.id)
        prev[indTable].items[indItem].text = action.text
        return [...prev]
      }
      case MOVE_TABLE_ITEMS: {
        const prev = state.slice()
        const ind = prev.findIndex(el => el._id === action.tableId)
        prev[ind].items = [...arrayMove(prev[ind].items, action.oldIndex, action.newIndex)]
        return [...prev]
      }
      default:
        return state
    }
  }
  return tables
}

export default initTables()
