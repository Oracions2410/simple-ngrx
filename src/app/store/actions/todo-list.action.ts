import { Todo } from 'src/app/models/todo.model';

export namespace TodoListModule {
  export enum ActionTypes {
    INIT_TODOS = '[todolist] Init Todos',
    CREATE_TODO = '[todoliist] create todo',
    DELETE_TODO = '[todolist] Delete todo',
  }

  export type Actions = InitTodos | CreateTodo | DeleteTodo;

  export class InitTodos {
    readonly type = ActionTypes.INIT_TODOS;
  }

  export class CreateTodo {
    readonly type = ActionTypes.CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class DeleteTodo {
    readonly type = ActionTypes.DELETE_TODO;
    constructor(public payload: number) {}
  }
}
