import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { todosReducer } from '@Reducers/todo-list-reducer';
import { TodoListState } from '@Models/todo.model';
import { TodoListEffects } from '@Effects/todo-list.effects';

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

export const appEffects = [TodoListEffects];
