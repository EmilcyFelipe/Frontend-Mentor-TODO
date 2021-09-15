import React from 'react'
import ListComponent from '../List_Component/List_Component'
import './Todo_Wrapper.css'

export default function TodoWrapper(){
    const [taskList,setTaskList] = React.useState([])
    const [id,setId] = React.useState(1)

    function insertElement(e){
        e.preventDefault();
        const {message} = e.target.elements;
        setTaskList([...taskList,{
            id : id,
            message : message.value,
        }])
        setId(id+1);
        message.value='';
    }

    return(
        <div className="todo-wrapper">
            <div className="todo-banner">
                <h1>T O D O</h1>
                <div>icon</div>
            </div>
            <div className="input-wrapper">
            <form onSubmit={insertElement}>
                <input className="task-input-icon" type="submit" value=''/>
                <input className="task-input" type="text" name="message"/>
            </form>
            </div>
            <ListComponent list={taskList}/>

        </div>
    )
}