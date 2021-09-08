import React, { useState, createContext } from "react";

export const TaskListContext = createContext([]);

export const TaskListProvider = ({ children }) => {
    
  const [tasks, setTasks] = useState([]);

  const handleCreateNewTask  = (task) => {
    if (task.length !== 0) {
      let id = Math.random() * (10000 - 0) + 0;
      let objeto = { id: id, title: task, isComplete: false };
      setTasks([...tasks, objeto]);
    }
  }
  
  const handleToggleTaskCompletion = (id) => {
  
    let newList = tasks.map((item) =>
      item.id === id
        ? { id: id, title: item.title, isComplete: !item.isComplete }
        : item
    );
    setTasks(newList);
  }
  
  const handleRemoveTaskCompletion = (id) => {
    let newList = tasks.map((item) =>
    item.id === id
      ? { id: id, title: item.title, isComplete: false }
      : item
    );
    setTasks(newList);
  }

  const handleDeletedTask = (id) => {
    let newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
  }

  return (
    <TaskListContext.Provider
     value={{ tasks,handleDeletedTask, handleCreateNewTask, handleToggleTaskCompletion , handleRemoveTaskCompletion}}>
      {children}
    </TaskListContext.Provider>
  );
};





