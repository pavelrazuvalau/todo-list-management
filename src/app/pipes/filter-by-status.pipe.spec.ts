import { FilterByStatusPipe } from './filter-by-status.pipe';

describe('FilterByStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
