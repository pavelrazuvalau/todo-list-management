import { initialState, appReducer } from '../app.reducer';
import * as AppActions from '../../actions/app.actions';

describe('appReducer', () => {
  it('should set loading state', () => {
    const action = AppActions.setLoadingState({ isLoading: true });

    const result = appReducer(initialState, AppActions.setLoadingState({ isLoading: true }));

    expect(result).toMatchSnapshot();
  });
});
