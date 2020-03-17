import { combineReducers } from 'redux';

import filter from '../shared/navbar/navbar.reducer';
import todoList from '../features/todoList/todoList.reducer';

export default combineReducers({
  filter,
  todoList,
});
