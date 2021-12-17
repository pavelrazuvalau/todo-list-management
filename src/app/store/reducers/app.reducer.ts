import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as appActions from '../actions/app.actions';

export interface AppState {
  isLoading: boolean;
}

export const initialState: AppState = {
  isLoading: false,
}

export const appReducer = createReducer(
  initialState,
  on(appActions.setLoadingState, (state, { isLoading }) => ({
    ...state,
    isLoading
  }))
)

export const getAppState = createFeatureSelector<AppState>('app');
export const getIsLoading = createSelector(
  getAppState,
  (state) => state.isLoading
);
