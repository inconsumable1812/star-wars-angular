import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { planets } from './reducers/getData/getData.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  // planets$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(planets),
  //       map(() => {})
  //     ),
  //   { dispatch: false }
  // );
}
