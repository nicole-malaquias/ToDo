import { useState, useContext} from "react";

import * as S from "./styled"
import { TaskListContext } from "../../Providers/TaskList";

import { FiTrash} from "react-icons/fi";



const Task = ({task,finish=false}) => {

    const {handleToggleTaskCompletion, handleDeletedTask ,handleRemoveTaskCompletion} = useContext(TaskListContext);
    
    const [ModalOpen, setModalOpen] = useState(false)


    const handleModal = () => {
        setModalOpen(!ModalOpen)
      }

    const handleDeleteTask = (id) => {
        handleDeletedTask(id)
        setModalOpen(!ModalOpen)
    }

    return (
        <> 
        {task !== undefined && 
            (
              
                <S.Container >
                   
                   {
                    ModalOpen && 
                        <S.ContainerModal > 
                            <div className="modal-content">                              
                                    <h1> Realmente deseja deletar? </h1>
                                    <button onClick={() => handleDeleteTask(task.id)}>Sim</button>  <button onClick={handleModal}>Cancelar</button>                              
                            </div >
                        </S.ContainerModal>
                    }
                    {
                    ModalOpen === false && <div className={task.isComplete ? "completed task" : "task"}>

                        {finish &&  <input type="checkbox" readOnly={true} checked={task.isComplete} onClick={() => handleRemoveTaskCompletion(task.id) }/> }
                        
                        {finish === false && <input type="checkbox" readOnly={true} checked={task.isComplete} onClick={() => handleToggleTaskCompletion(task.id) }/> }
                        <p>{task.title}</p>

                        <button type="button" onClick={handleModal}> <FiTrash size={20} /> </button>
                    </div>
                    }
                </S.Container>
            )
        }
    </>
    )
}

export default Task


