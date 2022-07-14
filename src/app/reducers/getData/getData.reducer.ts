import { createReducer, on } from '@ngrx/store';
import { Peoples, Planets } from 'src/api/types';
import { people, planets } from './getData.actions';

export const countNode = 'count';

export interface getDataState {
  planets: Planets;
  people: Peoples;
}

const initialState: getDataState = {
  planets: { count: 0, next: null, previous: null, results: [] },
  people: { count: 0, next: null, previous: null, results: [] }
};

export const getDataReducer = createReducer(
  initialState,
  on(planets, (state, action) => ({
    ...state,
    planets: action.planets
  })),
  on(people, (state, action) => ({
    ...state,
    people: action.people
  }))
);
