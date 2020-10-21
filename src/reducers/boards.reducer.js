import {
  CREATE_BOARD, EDIT_BOARD,
  FETCH_BOARDS, STAR_BOARD
} from '../types'

const defaultState = []


const initBoards = () => {
  const boards = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_BOARDS:
        return [...action.boards]
      case CREATE_BOARD:
        const board = {
          _id: action._id,
          name: action.name
        }
        return [...state, board]
      case EDIT_BOARD:
      case STAR_BOARD:
        const prev = state.slice()
        const ind = prev.findIndex(el => el._id === action.id)
        switch (action.type) {
          case EDIT_BOARD:
            prev[ind].name = action.name
            break
          case STAR_BOARD:
            prev[ind].stared = action.stared
            break
          default:
            break
        }
        return [...prev]
      default:
        return state
    }
  }
  return boards
}

export default initBoards()
