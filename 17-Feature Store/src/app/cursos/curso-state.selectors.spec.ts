import * as fromCursoState from './curso-state.reducer';
import { selectCursoStateState } from './curso-state.selectors';

describe('CursoState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursoStateState({
      [fromCursoState.cursoStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
