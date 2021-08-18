import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { SelectTodoComponent } from './components/select-todo/select-todo.component';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-todos',
      },
      {
        path: 'all-todos',
        component: AllTodosComponent,
      },
      {
        path: 'select-todo',
        component: SelectTodoComponent,
      },
      {
        path: '**',
        redirectTo: 'all-todos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
