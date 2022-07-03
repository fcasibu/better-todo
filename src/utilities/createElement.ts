import { IOptions } from '../types/interface';

export const createElement = ({
  type,
  children,
  classNames = [],
  attributes = {}
}: IOptions) => {
  const element = document.createElement(type);
  element.classList.add(...classNames);

  if (Array.isArray(children)) {
    children.forEach((child: IOptions) => element.append(createElement(child)));
  } else if (typeof children === 'object') {
    element.append(createElement(children));
  } else {
    element.textContent = children ?? '';
  }

  Object.entries(attributes).forEach(([key, val]) =>
    element.setAttribute(key, `${val}`)
  );

  return element;
};
