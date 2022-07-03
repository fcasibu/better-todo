import { ITask } from '../types/interface';
import Options from '../utilities/optionsBuilder';

interface IFormControl {
  label: string;
  inputType: string;
  task?: ITask;
  name?: string;
}

const FormControl = ({ label, inputType, task, name }: IFormControl) => {
  const inputOptions = new Options()
    .type('input')
    .classNames(['form-control__input'])
    .attributes({
      type: inputType,
      id: label.toLowerCase(),
      name: label.toLowerCase(),
      autocomplete: 'off',
      value: (task as any)?.[name!] ?? '',
      required: true
    })
    .createOptions();

  const paraOptions = new Options()
    .type('p')
    .classNames(['form-control__title'])
    .children(label)
    .createOptions();

  const formControlOptions = new Options()
    .type('label')
    .classNames(['form-control'])
    .attributes({ for: label.toLowerCase() })
    .children([paraOptions, inputOptions])
    .createOptions();

  return formControlOptions;
};

export default FormControl;
