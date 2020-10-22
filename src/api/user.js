import {getToken} from '../helpers/token.helper'

export const loadUser = async(id) => {
  try {
    const res = await fetch(`https://fprt-be.herokuapp.com/api/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    })
    if(!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch(e) {
    return Promise.reject({message: 'Server error'})
  }
}
