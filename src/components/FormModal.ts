import { ITask } from '../types/interface';
import { createElement } from '../utilities/createElement';
import Options from '../utilities/optionsBuilder';
import FormElement from './Form';

interface IFormElement {
  title: string;
  task?: ITask;
}

const createFormModal = ({ title, task }: IFormElement) => {
  const backdropOptions = new Options()
    .type('div')
    .classNames(['backdrop'])
    .createOptions();

  const optionModalOptions = new Options()
    .type('div')
    .classNames(['form-modal'])
    .children([FormElement({ title, task }), backdropOptions])
    .createOptions();

  return createElement(optionModalOptions);
};

export default createFormModal;
