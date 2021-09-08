import  Header  from "../../components/Header";
import * as S from "./styled"
import Task from "../../components/Task" 
import { TaskListContext } from "../../Providers/TaskList";

import { useContext } from "react";

const Finish = () =>{
    const { tasks } = useContext(TaskListContext);
    
    return (
        <S.Container>
            <Header home={false}/>
                
            <ul>
            {
                tasks && tasks.map((task) => (
                <>
                    {task.isComplete === true &&(
                    <>
                        <Task task={task} finish={true}/>
                    </>
                    )}
                </>
                ))
            }
            </ul>
        </S.Container>
    )
}

export default Finish