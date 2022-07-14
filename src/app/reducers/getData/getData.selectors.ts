import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getDataState } from './getData.reducer';

export const featureSelector = createFeatureSelector<getDataState>('getData');
export const planetsSelector = createSelector(
  featureSelector,
  (state) => state.planets
);
export const peopleSelector = createSelector(
  featureSelector,
  (state) => state.people
);
export const planetsResultSelector = createSelector(
  featureSelector,
  (state) => state.planets.results
);
export const peopleResultSelector = createSelector(
  featureSelector,
  (state) => state.people.results
);
