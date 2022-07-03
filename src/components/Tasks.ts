import Options from "../utilities/optionsBuilder";
import { createElement } from "../utilities/createElement";

const tasksOptions = new Options()
  .type("div")
  .classNames(["tasks"])
  .createOptions();

const TasksElement = createElement(tasksOptions);

export default TasksElement;
