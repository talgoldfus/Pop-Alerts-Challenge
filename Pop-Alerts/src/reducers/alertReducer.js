const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALERTS':
     return []
    default:
     return state
  }
}

export default alertReducer
