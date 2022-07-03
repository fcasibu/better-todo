import Options from '../utilities/optionsBuilder';
import { createElement } from '../utilities/createElement';

const createButtonOptions = (name: string, behavior: string, text: string) => {
  return new Options()
    .type('button')
    .classNames(['btn', `buttons__${name}`, behavior])
    .children(text)
    .createOptions();
};

const buttonsOptions = new Options()
  .type('div')
  .classNames(['buttons'])
  .children([
    createButtonOptions('add', 'open', 'Add Task'),
    createButtonOptions('delete', 'delete', 'Delete All')
  ])
  .createOptions();

const Buttons = createElement(buttonsOptions);

export default Buttons;
