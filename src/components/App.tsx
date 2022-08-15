import React, { useRef } from "react";

import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/Todo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

function App() {
  
  const { todoList, toggleTodoListItemStatus, addTodoListItem, deleteTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") {
      return;
    }
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";
  };

  
  const incompletedList = todoList.filter((todo: Todo) => !todo.done);
  
  const completedList = todoList.filter((todo: Todo) => todo.done);

  return (
    <>
      <TodoTitle title="Todo" as="h1" />
      <TodoAdd buttonText="+ add todo" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList todoList={incompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="undone list" as="h2" />
      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} title="done list" as="h2" />
    </>
  );
}

export default App;
