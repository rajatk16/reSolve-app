import {
  TODO_ITEM_CREATED,
  TODO_COMPLETED
} from '../eventTypes';

export default {
  Init: () => ({
    id: 'Todo-list-1',
    name: 'Todo-list-1',
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