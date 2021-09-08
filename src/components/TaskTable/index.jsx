import { useState,useContext } from "react";
import {FiCheckSquare} from "react-icons/fi";

import { TaskListContext } from "../../Providers/TaskList";

import Task from "../Task"

import * as S from "./styled"

const  TaskTable = () => {


  const { tasks,handleCreateNewTask } = useContext(TaskListContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddNewTask = ()=> {
    handleCreateNewTask(newTaskTitle)
    setNewTaskTitle("")
  }

  return (
    <> 
    <S.Container>
      <div>
        <h2>Minhas tasks</h2>
        <S.ContainerInput>
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            onClick={handleAddNewTask}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </S.ContainerInput>
        
      </div>
     
    </S.Container>
    
    <S.ContainerTasks>
    
      <ul>
        {tasks && tasks.map((task,index) => (
          <div key={index}>
          {task.isComplete === false &&(
            <>
            <Task task={task} key={index} />
            </>
          )}
         </div>
        ))}
      </ul>
      </S.ContainerTasks>
    </>
    
  );
}

export default TaskTable