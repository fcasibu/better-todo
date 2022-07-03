import { Status } from '../enum/Status';
import { Children } from '../types/interface';
import { createElement } from '../utilities/createElement';
import Options from '../utilities/optionsBuilder';

interface Modal {
  id: string;
}
const Wrapper = (options: Children, name: string, id: string) => {
  return new Options()
    .type('div')
    .classNames(['status', `modal__status-${name}`])
    .attributes({ 'data-id': id, 'data-status': name })
    .children(options)
    .createOptions();
};

const createText = (name: string) => {
  const textOptions = new Options().type('span').children(name).createOptions();

  return textOptions;
};

const createStatusModal = ({ id }: Modal) => {
  const optionModalOptions = new Options()
    .type('div')
    .classNames(['modal', 'modal__status'])
    .attributes({ tabindex: '0' })
    .children([
      Wrapper(createText('TODO'), Status.TODO, id),
      Wrapper(createText('HOLD'), Status.HOLD, id),
      Wrapper(createText('DONE'), Status.DONE, id),
      Wrapper(createText('IN PROGRESS'), Status.IN_PROGRESS, id),
      Wrapper(createText('IMPORTANT'), Status.IMPORTANT, id)
    ])
    .createOptions();

  return createElement(optionModalOptions);
};

export default createStatusModal;
