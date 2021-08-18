import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.model';
import { AppState } from 'src/app/store';
import { selectTodos$ } from 'src/app/store/selectors/todo-list.selector';
import { TodoListModule } from 'src/app/store/actions/todo-list.action';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
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
