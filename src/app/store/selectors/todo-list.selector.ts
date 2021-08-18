import { createSelector } from '@ngrx/store';
import { Todo, TodoListState } from 'src/app/models/todo.model';
import { AppState } from '..';

export const selectTodoListState$ = (state: AppState): TodoListState =>
  state.todos;

export const selectTodos$ = createSelector(
  selectTodoListState$,
  (state: TodoListState): Todo[] => state.data
);
