import {getToken} from '../helpers/token.helper'

export const loadTables = async (boardId) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/tables/${boardId}`, {
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

export const createTable = async (boardId, name) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/tables/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        name,
        boardId
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const editTable = async (id, name) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/tables/edit`, {
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

export const moveTables = async (tableOneId, tableTwoId) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/table/move`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        tableOneId,
        tableTwoId
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}
