export const debounce = (fn, ms) => {
  let timeout = null
  return (value) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(fn.bind(null, value), ms)
  }
}