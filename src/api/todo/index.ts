import axios from '../axios';

export const createTodo = async (todo: string) => {
  return new Promise(async (resolve, reject) => {
    return await axios
      .post('/todos', { todo })
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTodos = async () => {
  return new Promise(async (resolve, reject) => {
    return await axios
      .get('/todos')
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  return new Promise(async (resolve, reject) => {
    return await axios
      .put(`/todos/${id}`, { todo, isCompleted })
      .then((res) => {
        if (res.status !== 200) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteTodo = async (id: number) => {
  return new Promise(async (resolve, reject) => {
    return await axios
      .delete(`/todos/${id}`)
      .then((res) => {
        if (res.status !== 204) {
          reject(res.data);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
