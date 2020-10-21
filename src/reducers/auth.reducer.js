import {LOGIN_USER, RESET_USER} from '../types'

const defaultState = {
  userId: null,
  userName:'',
  isAuth: false,
  isResolved: false,
  token: ''
}


const initAuth = () => {
  const auth = (state = defaultState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          isResolved: true,
          isAuth: !!action.token,
          userId: action.userId,
          userName: action.userName,
          token: action.token,
        }
      case RESET_USER:
        return {...state, isAuth: false}
      default:
        return state
    }
  }
  return auth
}

export default initAuth()
