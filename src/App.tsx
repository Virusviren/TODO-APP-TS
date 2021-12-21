import React, { useState, useEffect } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
import { Todo } from "./models";
import { v4 as uuidv4 } from "uuid";

/*
  Using the TodoItem component, Todo model and the form below, 
  extend the code so that the user can add items to the list.
  Then add support to add, remove and mark tasks as done/not done 
  Try to make the code you write strongly typed

  Protip: You can use the library added to the project to create random identifiers: 
   uuidv4()
*/
function App() {
  // States
  const [item, setItem] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // Functions
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };
  const handleSubmit = () => {
    const date = new Date();
    const todoItemToAdd = {
      id: uuidv4(),
      date: date.toLocaleDateString(),
      name: item
    };
    setTodoList([...todoList, todoItemToAdd]);
  };
  const deleteItem = (id: string) => {
    const newList = todoList.filter((item) => {
      return item.id !== id;
    });

    setTodoList(newList);
  };
  return (
    <div className="container">
      <input name="name" type="text" onChange={(e) => handelChange(e)} />
      <input type="button" value="Add" onClick={(e) => handleSubmit()} />

      <h1>Todo list:</h1>
      {todoList &&
        todoList?.map((toditem) => {
          return (
            <TodoItem
              key={toditem.id}
              todoItem={toditem}
              deleteItem={deleteItem}
            />
          );
        })}
    </div>
  );
}

export default App;
