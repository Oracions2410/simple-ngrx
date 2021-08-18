import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-list',
  },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./modules/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
  {
    path: '**',
    redirectTo: 'todo-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
