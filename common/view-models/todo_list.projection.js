import {
  TODO_LIST_CREATED, 
  TODO_ITEM_CREATED, 
  TODO_COMPLETED
} from '../eventTypes';

export default {
  Init: () => null,
  [TODO_LIST_CREATED]: (state, {aggregateId, payload: {name}}) => ({
    id: aggregateId,
    name,
    list: []
  }),
  [TODO_ITEM_CREATED]: (state, {payload: {id, text}}) => ({
    ...state,
    list: [
      ...state.list,
      {
        id,
        text,
        mark: false
      }
    ]
  }),
  [TODO_COMPLETED]: (state, {payload: {id}}) => ({
    ...state,
    list: state.list.map(task =>
      task.id === id 
      ? {
        ...task,
        mark: !task.mark
      }
      : task
    )
  })
};