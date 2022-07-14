import { createAction, props } from '@ngrx/store';
import { Peoples, Planets } from 'src/api/types';

export const planets = createAction(
  '[getData] planets',
  props<{ planets: Planets }>()
);
export const people = createAction(
  '[getData] people',
  props<{ people: Peoples }>()
);
