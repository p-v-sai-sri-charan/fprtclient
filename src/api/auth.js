export const login = async({email, password}) => {
  try {
    const res = await fetch('https://fprt-be.herokuapp.com/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email, password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch(e) {
    return Promise.reject({message: 'Server error'})
  }
}

export const register = async({email, password, userName}) => {
  try {
    const res = await fetch('https://fprt-be.herokuapp.com/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email, password, userName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!res.ok)
      return Promise.reject(await res.json())
    return await res.json()
  } catch(e) {
    return Promise.reject({message: 'Server error'})
  }
}
