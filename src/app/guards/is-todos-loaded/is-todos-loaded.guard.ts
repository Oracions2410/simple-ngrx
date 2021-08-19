import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectTodosLoaded$ } from '@Selectors/todo-list.selector';
import { AppState } from '@StoreConfig';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoListModule } from '@Actions/todo-list.action';

@Injectable({
  providedIn: 'root',
})
export class IsTodosLoadedGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('Guard can activate !');
    return this.store.pipe(
      select(selectTodosLoaded$),
      map((isLoaded: boolean) => {
        // console.log('loaddddd', isLoaded);
        if (!isLoaded) {
          this.store.dispatch(new TodoListModule.LoadInitTodos());
        }
        return true;
      })
    );
  }
}
