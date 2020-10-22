import {getToken} from '../helpers/token.helper'

export const loadBoards = async () => {
  try {
    const res = await fetch(`/api/boards/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const createBoard = async (name) => {
  try {
    const res = await fetch(`/api/boards/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        name
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const editBoard = async (id, name) => {
  try {
    const res = await fetch(`/api/boards/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        name,
        id
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const starBoard = async (id, stared) => {
  try {
    const res = await fetch(`/api/boards/star`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        stared,
        id
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}
