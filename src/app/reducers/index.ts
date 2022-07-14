import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { getDataReducer, getDataState } from './getData/getData.reducer';

export interface State {
  getData: getDataState;
}

export const reducers: ActionReducerMap<State> = {
  getData: getDataReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
