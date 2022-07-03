import { Children } from '../types/interface';
import { createElement } from '../utilities/createElement';
import Options from '../utilities/optionsBuilder';

interface Modal {
  id: string;
}
const Wrapper = (options: Children, name: string, id: string) => {
  return new Options()
    .type('div')
    .classNames([`modal__option-${name}`])
    .attributes({ id })
    .children(options)
    .createOptions();
};

const createText = (name: string, icon: string[]) => {
  const textOptions = new Options().type('span').children(name).createOptions();

  const textIconOptions = new Options()
    .type('span')
    .classNames(icon)
    .createOptions();

  return [textIconOptions, textOptions];
};

const createOptionModal = ({ id }: Modal) => {
  const optionModalOptions = new Options()
    .type('div')
    .classNames(['modal', 'modal__option'])
    .attributes({ tabindex: '0' })
    .children([
      Wrapper(
        [...createText('Update Task', ['bi', 'bi-pencil-square'])],
        'update',
        id
      ),
      Wrapper([...createText('Delete', ['bi', 'bi-trash-fill'])], 'delete', id)
    ])
    .createOptions();

  return createElement(optionModalOptions);
};

export default createOptionModal;
