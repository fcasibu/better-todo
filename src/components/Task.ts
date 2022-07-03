import Options from '../utilities/optionsBuilder';
import { createElement } from '../utilities/createElement';
import { Children } from '../types/interface';
import { Status } from '../enum/Status';

interface ITask {
  name: string;
  description: string;
  _id: string;
  createdAt: Date | string;
  status: Status;
}

const Wrapper = (options: Children, name: string) => {
  return new Options()
    .type('div')
    .classNames([`task__${name}`])
    .children(options)
    .createOptions();
};

const TaskElement = ({ name, description, _id, createdAt, status }: ITask) => {
  const statusOptions = new Options()
    .type('span')
    .classNames(['task__menu-status'])
    .attributes({ status, 'data-id': _id })
    .children(status)
    .createOptions();

  const taskNameOptions = new Options()
    .type('h5')
    .children(name)
    .createOptions();

  const taskDescriptionOptions = new Options()
    .type('p')
    .classNames(['text'])
    .children(description)
    .createOptions();

  const menuOptions = new Options()
    .type('i')
    .classNames(['bi', 'bi-three-dots', 'task__menu-option'])
    .attributes({ 'data-id': _id })
    .createOptions();

  const taskOptions = new Options()
    .type('div')
    .classNames(['task'])
    .attributes({ 'data-id': _id })
    .children([
      Wrapper([taskNameOptions, taskDescriptionOptions], 'info'),
      Wrapper([statusOptions, menuOptions], 'menu')
    ])
    .createOptions();

  return createElement(taskOptions);
};

export default TaskElement;
