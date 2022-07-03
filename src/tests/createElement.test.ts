import '@testing-library/jest-dom';
import { createElement } from '../utilities/createElement';

describe('createElement', () => {
  it('should add classes to an element', () => {
    const element = createElement({
      type: 'div',
      classNames: ['element-class', 'element-class-1']
    });

    expect(element).toHaveClass('element-class');
    expect(element).toHaveClass('element-class-1');
  });

  it('should add attributes to an element', () => {
    const element = createElement({
      type: 'div',
      attributes: {
        'data-index': '1',
        id: 'test-id'
      }
    });
    expect(element.getAttribute('data-index')).toBe('1');
    expect(element.getAttribute('id')).toBe('test-id');
  });

  it('should accept string as children', () => {
    const element = createElement({ type: 'div', children: 'Hello World' });

    expect(element).toHaveTextContent('Hello World');
  });

  it('should accept objects as children', () => {
    const element = createElement({
      type: 'div',
      children: { type: 'div', children: 'Hello World' }
    });

    expect(element.children).toHaveLength(1);
    expect(element.children[0]).toHaveTextContent('Hello World');
  });

  it('should accept arrays as children', () => {
    const element = createElement({
      type: 'div',
      children: [
        { type: 'div', children: 'Hello World' },
        { type: 'div', children: 'Goodbye World' }
      ]
    });

    expect(element.children).toHaveLength(2);
    expect(element.children[1]).toHaveTextContent('Goodbye World');
  });
});
