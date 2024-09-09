import { observable, action } from 'mobx';

const todoList = observable({ value: [] });

const setTodoList = action((list: []) => {
  todoList.value = list;
});

export default { todoList, setTodoList };
