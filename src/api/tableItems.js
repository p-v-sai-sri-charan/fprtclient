import {getToken} from '../helpers/token.helper'

export const createTableItem = async (tableId, text) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/table-items/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        text,
        tableId
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const editTableItem = async (id, text) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/table-items/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        text,
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

export const moveTableItems = async (itemOneId, itemTwoId) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/table-items/move`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        itemOneId,
        itemTwoId
      })
    })
    if (!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch (e) {
    return Promise.reject({message: 'Server error'})
  }
}
