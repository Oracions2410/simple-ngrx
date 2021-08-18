import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { todosReducer } from '@Reducers/todo-list-reducer';
import { TodoListState } from '@Models/todo.model';

const reducers = {
  todos: todosReducer,
};

export interface AppState {
  todos: TodoListState;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered reducers'
);
