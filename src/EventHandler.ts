import createOptionModal from './components/OptionModal';
import { Status } from './enum/Status';
import { Task } from './storage/Storage';
import { qsa } from './utilities/domUtil';
import { emit } from './EventManager';
import createFormModal from './components/FormModal';
import createStatusModal from './components/StatusModal';
import createTextModal from './components/TextModal';

export const initializeEventHandlers = () => {
  window.addEventListener('click', (e) => {
    if ((e.target as HTMLButtonElement).matches('.form__button')) {
      e.preventDefault();
      const inputs = qsa(
        '.form-control__input'
      ) as NodeListOf<HTMLInputElement>;

      if ((e.target as HTMLButtonElement).textContent === 'Add Task') {
        emit('createTask', {
          name: inputs[0].value,
          description: inputs[1].value,
          createdAt: inputs[2].value,
          status: Status.TODO
        });
      } else {
        emit('updateTask', {
          name: inputs[0].value,
          description: inputs[1].value,
          createdAt: inputs[2].value,
          _id: (e.target as HTMLButtonElement).id
        });
      }

      (e.target as HTMLButtonElement).parentElement!.parentElement!.remove();
    }

    if ((e.target as HTMLDivElement).matches('.modal__option-delete')) {
      emit('deleteTask', { element: e.target });
    }

    if ((e.target as HTMLButtonElement).matches('.delete')) {
      emit('deleteAll', {});
    }

    if ((e.target as HTMLDivElement).matches('.status')) {
      emit('changeStatus', {
        id: (e.target as HTMLDivElement).dataset.id,
        status: (e.target as HTMLDivElement).dataset.status
      });
      (e.target as HTMLDivElement).parentElement!.remove();
    }

    if ((e.target as HTMLSpanElement).matches('.task__menu-option')) {
      emit('openMenu', {
        element: e.target,
        modal: createOptionModal({
          id: (e.target as HTMLSpanElement).dataset.id!
        })
      });
    }

    if ((e.target as HTMLSpanElement).matches('.task__menu-status')) {
      emit('openMenu', {
        element: e.target,
        modal: createStatusModal({
          id: (e.target as HTMLSpanElement).dataset.id!
        })
      });
    }

    if ((e.target as HTMLParagraphElement).matches('.text')) {
      emit('openMenu', {
        element: (e.target as HTMLParagraphElement).parentElement,
        modal: createTextModal({
          text: (e.target as HTMLParagraphElement).textContent!
        })
      });
    }

    if ((e.target as HTMLDivElement).matches('.modal__option-update')) {
      const task = Task.findById((e.target as HTMLDivElement).id);
      emit('openForm', {
        modal: createFormModal({ title: 'Update Task', task })
      });
    }

    if ((e.target as HTMLDivElement).matches('.backdrop')) {
      emit('closeForm', {
        element: (e.target as HTMLDivElement).parentElement
      });
    }

    if ((e.target as HTMLDivElement).matches('.open')) {
      emit('openForm', { modal: createFormModal({ title: 'Add Task' }) });
    }
  });
};
