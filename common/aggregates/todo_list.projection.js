import {TODO_LIST_CREATED} from '../eventTypes';

export default {
  Init: () => ({}),
  [TODO_LIST_CREATED]: (state, {timestamp}) => ({
    ...state,
    createdAt: timestamp
  })
};