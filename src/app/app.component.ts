import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { TodoListModule } from './store/actions/todo-list.action';
import { TodoListService } from '@Services/todo-list.service';
import { Todo } from '@Models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private todoListService: TodoListService
  ) {}

  async ngOnInit(): Promise<void> {
    let todos: Todo[] = [];
    todos = await this.todoListService.getTodos().toPromise();
    if (todos.length > 0) {
      this.store.dispatch(new TodoListModule.InitTodos(todos));
    }
  }
}
