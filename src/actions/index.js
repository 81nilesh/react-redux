export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num
  }
}

export const decNumber = (ans) => {
  return {
    type: "DECREMENT",
    payload: ans
  }
}