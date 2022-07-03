import { ITask } from '../types/interface';

type Data = ITask;

const Storage = (storageName: string) => {
  let collection = new Map();

  const populate = () => {
    collection =
      new Map(JSON.parse(localStorage.getItem(storageName)!)) ?? new Map();
  };

  const create = (data: Data) => {
    const randomUUID = self.crypto.randomUUID();
    collection.set(randomUUID, {
      ...data,
      _id: randomUUID
    });
    localStorage.setItem(storageName, JSON.stringify(Array.from(collection)));
    return collection.get(randomUUID);
  };

  const deleteAll = () => {
    if (collection.size <= 0)
      return { message: `${storageName} is already empty` };

    collection.clear();
    localStorage.setItem(storageName, JSON.stringify(Array.from(collection)));
    return null;
  };

  const findByIdAndUpdate = (id: string, obj: Data) => {
    if (!collection.has(id)) return { message: 'Id not found' };

    Object.entries(obj).forEach(([key, val]) => {
      const data = collection.get(id);
      if (Array.isArray(data[key])) {
        data[key].push(val);
      } else {
        data[key] = val;
      }
    });

    localStorage.setItem(storageName, JSON.stringify(Array.from(collection)));
    return collection.get(id);
  };

  const findByIdAndDelete = (id: string) => {
    if (!collection.has(id)) return { message: 'Id not found' };

    collection.delete(id);
    localStorage.setItem(storageName, JSON.stringify(Array.from(collection)));
    return null;
  };

  const find = () => {
    const collectionCopy = Array.from(collection, ([key, value]) => value);

    return collectionCopy;
  };

  const findById = (id: string) => {
    if (!collection.has(id)) return { message: 'Id not found' };
    return collection.get(id);
  };

  return {
    populate,
    create,
    deleteAll,
    findByIdAndUpdate,
    findByIdAndDelete,
    find,
    findById
  };
};

const Task = Storage('tasks');
const Project = Storage('projects');
const Note = Storage('notes');

export { Task, Storage };
