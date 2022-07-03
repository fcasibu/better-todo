import { format } from 'date-fns';
import Options from '../utilities/optionsBuilder';
import { createElement } from '../utilities/createElement';

const dateTextOptions = new Options()
  .type('span')
  .classNames(['current-date__text'])
  .children(format(new Date(), 'LLL d'))
  .createOptions();

const currentDateOptions = new Options()
  .type('div')
  .classNames(['current-date'])
  .children(dateTextOptions)
  .createOptions();

const CurrentDate = createElement(currentDateOptions);

export default CurrentDate;
