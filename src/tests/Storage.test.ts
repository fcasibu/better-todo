import '@testing-library/jest-dom';
import { Status } from '../enum/Status';
import { Storage } from '../storage/Storage';

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: function () {
      return '1';
    }
  }
});

describe('Storage', () => {
  const storage = Storage('test');

  afterAll(() => {
    localStorage.removeItem('test');
    storage.deleteAll();
  });

  it('should be able to create an object', () => {
    const testObj = storage.create({
      name: 'task 1',
      createdAt: '2022-12-12',
      status: Status.TODO
    });

    expect(testObj.name).toBe('task 1');
    expect(testObj.createdAt).toBe('2022-12-12');
    expect(testObj.status).toBe(Status.TODO);
    expect(testObj._id).toBe('1');
  });

  it('should update an object', () => {
    const testObj = storage.findByIdAndUpdate('1', {
      name: 'new task 1',
      createdAt: '2022-12-12',
      status: Status.DONE
    });
    expect(testObj.name).toBe('new task 1');
    expect(testObj.status).toBe(Status.DONE);
  });

  it('should be able to get an object by id', () => {
    const testObj = storage.findById('1');

    expect(testObj.name).toBe('new task 1');
    expect(testObj.status).toBe(Status.DONE);
  });

  it('should be able to delete an object by id', () => {
    const testObj = storage.findByIdAndDelete('1');

    expect(testObj).toBeNull();
  });

  it('should delete all objects in the collection', () => {
    storage.create({
      name: 'task 1',
      createdAt: '2022-12-12',
      status: Status.TODO
    });

    expect(storage.deleteAll()).toBeNull();

    expect(storage.deleteAll()?.message).toBe('test is already empty');
  });
});
