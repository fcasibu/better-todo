import '@testing-library/jest-dom';
import Options from '../utilities/optionsBuilder';

describe('optionsBuilder', () => {
  it('should create options', () => {
    const options = new Options()
      .type('div')
      .attributes({ 'data-id': '1' })
      .classNames(['class-1', 'class-2'])
      .children('Hello World')
      .createOptions();

    expect(options.type).toBe('div');
    expect(options.attributes).toEqual({ 'data-id': '1' });
    expect(options.classNames).toEqual(['class-1', 'class-2']);
    expect(options.children).toEqual('Hello World');
  });
});
