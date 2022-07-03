import './style.scss';

import { initializeEventHandlers } from './EventHandler';
import { Task } from './storage/Storage';
import { qs } from './utilities/domUtil';
import { on } from './EventManager';
import { sleep } from './utilities/sleep';

import CurrentDate from './components/CurrentDate';
import Buttons from './components/Buttons';
import TaskElement from './components/Task';
import TasksElement from './components/Tasks';

(function init() {
  const content = qs('#content')!;
  content.append(CurrentDate, Buttons, TasksElement);
  initializeEventHandlers();
  Task.populate();

  Task.find().forEach((el) => TasksElement.append(TaskElement(el)));

  on('createTask', (data) =>
    TasksElement.append(TaskElement(Task.create(data)))
  );

  on('updateTask', (data) => {
    const task = Task.findByIdAndUpdate(data._id, data);
    const el = qs(`[data-id='${data._id}']`)!;
    qs('h5', el)!.textContent = task.name;
    qs('p', el)!.textContent = task.description;
  });

  on('deleteTask', async (data) => {
    qs(`[data-id='${data.element.id}']`)!.classList.add('close');
    await sleep(300);
    qs(`[data-id='${data.element.id}']`)!.remove();
    Task.findByIdAndDelete(data.element.id);
  });

  on('deleteAll', async () => {
    // Add modal later for confirmation
    while (TasksElement.firstChild) {
      (TasksElement.lastChild as HTMLDivElement).classList.add('close');
      await sleep(200);
      TasksElement.removeChild(TasksElement.lastChild!);
    }

    // Add modal to display warning
    Task.deleteAll();
  });

  on('changeStatus', (data) => {
    const newTask = Task.findByIdAndUpdate(data.id, {
      status: data.status
    });
    const status = qs(`.task__menu-status[data-id='${data.id}']`)!;
    status.textContent = newTask.status;
    status.setAttribute('status', newTask.status);
  });

  on('openMenu', (data) => {
    data.element.append(data.modal);
    data.modal.focus();
    data.modal.addEventListener('blur', () => data.modal.remove());
  });

  on('openForm', (data) => document.body.append(data.modal));

  on('closeForm', async (data) => {
    data.element.classList.add('close');
    await sleep(300);
    data.element.remove();
  });
})();
