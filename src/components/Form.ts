import { ITask } from '../types/interface';
import { createElement } from '../utilities/createElement';
import Options from '../utilities/optionsBuilder';
import FormControl from './FormControl';

interface IFormElement {
  title: string;
  task?: ITask;
}

const FormElement = ({ title, task }: IFormElement) => {
  const nameInput = FormControl({
    label: 'Name',
    inputType: 'text',
    task,
    name: 'name'
  });
  const descriptionInput = FormControl({
    label: 'Description',
    inputType: 'text',
    task,
    name: 'description'
  });
  const dateInput = FormControl({
    label: 'Date',
    inputType: 'date',
    task,
    name: 'createdAt'
  });
  const buttonOptions = new Options()
    .type('button')
    .classNames(['btn', 'form__button'])
    .attributes({ type: 'submit', id: task?._id })
    .children(title)
    .createOptions();

  return new Options()
    .type('form')
    .classNames(['form'])
    .children([nameInput, descriptionInput, dateInput, buttonOptions])
    .createOptions();
};

export default FormElement;
