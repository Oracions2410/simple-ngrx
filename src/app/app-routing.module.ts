import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsTodosLoadedGuard } from './guards/is-todos-loaded/is-todos-loaded.guard';

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
    canActivate: [IsTodosLoadedGuard],
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
