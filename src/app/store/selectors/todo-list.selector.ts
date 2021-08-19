import { createSelector } from '@ngrx/store';
import { Todo, TodoListState } from 'src/app/models/todo.model';
import { AppState } from '..';

export const selectTodoListState$ = (state: AppState): TodoListState =>
  state.todos;

export const selectTodos$ = createSelector(
  selectTodoListState$,
  (state: TodoListState): Todo[] => state.data
);

export const selectTodoSelected$ = createSelector(
  selectTodoListState$,
  (state: TodoListState): Todo | undefined => state.selectTodo
);

export const selectTodosLoading$ = createSelector(
  selectTodoListState$,
  (todos) => todos.loading
);

export const selectTodosLoaded$ = createSelector(
  selectTodoListState$,
  (todos) => todos.loaded
);
