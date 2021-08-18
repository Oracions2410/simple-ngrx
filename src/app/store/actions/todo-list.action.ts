import { Todo } from '@Models/todo.model';

export namespace TodoListModule {
  export enum ActionTypes {
    INIT_TODOS = '[todolist] Init Todos',
    CREATE_TODO = '[todoliist] create todo',
    DELETE_TODO = '[todolist] Delete todo',
    SELECT_TODO = '[todolist] select todo',
    UPDATE_TODO = '[todolist] update todo',
  }

  export class InitTodos {
    readonly type = ActionTypes.INIT_TODOS;
    constructor(public payload: Todo[]) {}
  }

  export class CreateTodo {
    readonly type = ActionTypes.CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class DeleteTodo {
    readonly type = ActionTypes.DELETE_TODO;
    constructor(public payload: number) {}
  }

  export class UpdateTodo {
    readonly type = ActionTypes.UPDATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class SelectTodo {
    readonly type = ActionTypes.SELECT_TODO;
    constructor(public payload: Todo) {}
  }

  export type Actions =
    | InitTodos
    | CreateTodo
    | DeleteTodo
    | SelectTodo
    | UpdateTodo;
}
