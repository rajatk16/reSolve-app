import { TODO_ITEM_CREATED, TODO_COMPLETED } from '../eventTypes';

export default {
  createTodoItem: (state, {payload: {id, text}}) => {
    if(!state || !state.createdAt) {
      throw new Error("List does not exist")
    }
    if (!id || !text) throw new Error('Id or Text is not given')
    return {
      type: TODO_ITEM_CREATED,
      payload: {id, text}
    }
  },
  completeTodoItem: (state, {payload: {id}}) => {
    if(!state || !state.createdAt) {
      throw new Error(`List does not exist`)
    }
    if (!id) throw new Error('id not provided')
    return {
      type: TODO_COMPLETED,
      payload: {id}
    }
  }
}