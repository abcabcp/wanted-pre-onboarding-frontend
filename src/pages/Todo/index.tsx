import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos, createTodo, deleteTodo, updateTodo } from '../../api/todo';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import { TodoContainer } from './style';

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
const Todo = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [editInputValue, setEditInputValue] = useState('');
  const [isEditStatus, setIsEditStatus] = useState<number>();
  const [todoList, setTodoList] = useState<TodoType[] | undefined>();

  //input change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'todo') {
      setInputValue(value);
    } else if (name === 'edit') {
      setEditInputValue(value);
    }
  };

  //get todo
  const getTodoList = useCallback(async () => {
    await getTodos().then((response: any) => {
      setTodoList(response);
    });
  }, []);

  //create todo
  const onCreateTodo = async () => {
    await createTodo(inputValue).then((response: any) => {
      getTodoList();
    });
  };

  //delete todo
  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id).then(() => {
      getTodoList();
    });
  };

  //update todo
  const onUpdateTodo = async (
    id: number,
    todo: string,
    isCompleted: boolean,
  ) => {
    await updateTodo(id, todo, isCompleted).then(() => {
      getTodoList();
    });
  };

  //edit status
  const onChangeEditStatus = (
    id: number,
    todo: string,
    isCompleted: boolean,
  ) => {
    if (isEditStatus !== id) {
      setIsEditStatus(id);
      setEditInputValue(todo);
    } else {
      onUpdateTodo(id, editInputValue, isCompleted);
      setIsEditStatus(undefined);
    }
  };

  //logout
  const logout = () => {
    if (!localStorage.getItem('token')) return;
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <TodoContainer>
      <h1 className="text-center">TODO_LIST ✏️</h1>
      <form className="input-contents" onSubmit={onCreateTodo}>
        <Input
          name="todo"
          type="text"
          value={inputValue}
          onChange={onChange}
          className="todo-input"
          placeholder="할일을 입력해주세요."
        />
        <Button
          className="submit-btn"
          text="추가"
          disabled={inputValue.length < 1}
        />
      </form>
      <div className="list-contents">
        {todoList?.length === 0 && (
          <div className="no-content">
            <p>투두리스트를 등록해보세요 !</p>
          </div>
        )}
        <ul>
          {todoList?.map((v, i) => (
            <li key={i}>
              <div className="todo-left">
                <div className="completed">
                  <CheckBox
                    className="cursor-pointer"
                    checked={v.isCompleted}
                    onClick={() => onUpdateTodo(v.id, v.todo, !v.isCompleted)}
                  />
                </div>
                {isEditStatus !== v.id ? (
                  <p className="todo"> {v.todo}</p>
                ) : (
                  <Input
                    name="edit"
                    type="text"
                    value={editInputValue}
                    onChange={onChange}
                    className="edit-input"
                    placeholder="할일을 입력해주세요."
                  />
                )}
              </div>
              <div className="todo-icon-contents">
                <div
                  className="todo-icon cursor-pointer"
                  onClick={() =>
                    onChangeEditStatus(v.id, v.todo, v.isCompleted)
                  }
                >
                  <img
                    src={
                      isEditStatus !== v.id
                        ? '/images/icon_edit.png'
                        : '/images/icon_confirm.png'
                    }
                    className={isEditStatus === v.id ? 'edit' : ''}
                    alt={isEditStatus === v.id ? 'edit' : 'confirm'}
                  />
                </div>
                <div
                  className="todo-icon cursor-pointer"
                  onClick={() =>
                    isEditStatus !== v.id
                      ? onDeleteTodo(v.id)
                      : setIsEditStatus(undefined)
                  }
                >
                  <img
                    src={
                      isEditStatus !== v.id
                        ? '/images/icon_delete.png'
                        : '/images/icon_cancel.png'
                    }
                    className={isEditStatus !== v.id ? 'delete' : 'cancel'}
                    alt={isEditStatus !== v.id ? 'delete' : 'cancel'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center cursor-pointer" onClick={() => logout()}>
        LOGOUT
      </div>
    </TodoContainer>
  );
};

export default Todo;
