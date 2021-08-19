import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '@Models/todo.model';
import { AppState } from '@StoreConfig';
import {
  selectTodos$,
  selectTodosLoaded$,
  selectTodosLoading$,
} from '@Selectors/todo-list.selector';
import { TodoListModule } from '@Actions/todo-list.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  todoForm: FormGroup;

  todosLoading: Observable<boolean>;

  todosLoaded: Observable<boolean>;

  private todolength: number;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Initialization
    this.todolength = 0;

    this.todosLoading = store.pipe(select(selectTodosLoading$));
    this.todosLoaded = store.pipe(select(selectTodosLoaded$));

    this.todos$ = store.pipe(
      select(selectTodos$)
      // tap((todos: Todo[]) => (this.todolength = todos.length))
    );

    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  async ngOnInit(): Promise<void> {
    // this.todosLoaded.subscribe((loaded: boolean) => {
    //   console.log('Chargement terminé: ', loaded);
    //   if (loaded === false) {
    //     this.store.dispatch(new TodoListModule.LoadInitTodos());
    //   }
    // });
    // console.log('Loading: ', this.todosLoading);
    // console.log('todos: ', this.todos$);
  }

  createTodo(todo: Todo) {
    const payload = { ...todo, userId: 1 };

    this.store.dispatch(new TodoListModule.LoadCreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new TodoListModule.LoadDeleteTodo(id));
  }

  selectTodo(todo: Todo): void {
    this.store.dispatch(new TodoListModule.SelectTodo(todo));
    this.router.navigate(['/todo-list/select-todo']);
  }
}
