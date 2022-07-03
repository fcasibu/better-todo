export const qs = (selector: string, el: Document | Element = document) =>
  el.querySelector(selector);

export const qsa = (selector: string, el: Document | Element = document) =>
  el.querySelectorAll(selector);
