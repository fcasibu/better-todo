import { Status } from '../enum/Status';

export type Children = IOptions | IOptions[] | string;

export interface IOptions {
  classNames?: string[];
  attributes?: any;
  type: string;
  children?: Children;
}

export interface ITask {
  name?: string;
  description?: string;
  createdAt?: Date | string;
  status?: Status;
  _id?: string;
}
