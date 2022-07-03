import { createElement } from '../utilities/createElement';
import Options from '../utilities/optionsBuilder';

// Need to make these modals reusable
interface Modal {
  text: string;
}

const createText = (text: string) => {
  const textOptions = new Options().type('span').children(text).createOptions();

  return textOptions;
};

const createTextModal = ({ text }: Modal) => {
  const optionModalOptions = new Options()
    .type('div')
    .classNames(['modal', 'modal__text'])
    .attributes({ tabindex: '0' })
    .children(createText(text))
    .createOptions();

  return createElement(optionModalOptions);
};

export default createTextModal;
