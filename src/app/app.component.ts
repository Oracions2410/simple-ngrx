import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import { AppState } from './store';
import { TodoListModule } from './store/actions/todo-list.action';
import { selectTodos$ } from './store/selectors/todo-list.selector';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>;

  todoForm: FormGroup;

  private todolength: number;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    // Initialization
    this.todolength = 0;

    this.todos$ = store.pipe(
      select(selectTodos$),
      tap((todos: Todo[]) => (this.todolength = todos.length))
    );
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new TodoListModule.InitTodos());
  }

  createTodo(todo: Todo) {
    const payload = { ...todo, userId: 1, id: this.todolength + 1 };

    this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }
}
