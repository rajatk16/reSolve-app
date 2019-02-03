import {TODO_LIST_CREATED, TODO_ITEM_CREATED, TODO_COMPLETED} from '../eventTypes';

export default {
  createTodoList: (state, {payload: {name}}) => {
    if(state.createdAt) throw new Error("The list already exists")
    if (!name) throw new Error("name is required")
    return {
      type: TODO_LIST_CREATED,
      payload: {name}
    }
  },
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