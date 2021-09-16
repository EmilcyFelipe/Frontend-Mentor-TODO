import React, { useEffect } from 'react'
import ListComponent from '../List_Component/List_Component'
import './Todo_Wrapper.css'
import toogleTheme from '../../utils/toogle_theme'
import Moon from '../../images/icon-moon.svg'



export default function TodoWrapper(){
    const [taskList,setTaskList] = React.useState([])
    const [id,setId] = React.useState(1);
    const [targetTheme,setTargetTheme] = React.useState(true)

   

    useEffect(()=>{
        if(taskList.length===0){
            setId(1)
        }
        localStorage.setItem('list',{taskList})
        console.log(localStorage.getItem('list'))
    },[taskList]);

    function insertElement(e){
        e.preventDefault();
        const {message} = e.target.elements;
        setTaskList([...taskList,{
            id : id,
            message : message.value,
            complete : false
        }])
        setId(id+1);
        message.value='';
    }

    return(
        <div className="todo-wrapper">
            <div className="todo-banner">
                <h1>T O D O</h1>
                <img className="icon-theme" alt='icon theme' src={Moon} onClick={(e)=>{toogleTheme(e,targetTheme); setTargetTheme(!targetTheme)}}/>
            </div>
            <div className="input-wrapper">
            <form onSubmit={insertElement}>
                <input className="task-input-icon" type="submit" value=''/>
                <input className="task-input" type="text" name="message" placeholder="Create a new todo"/>
            </form>
            </div>
            <ListComponent list={taskList} func={setTaskList}/>

        </div>
    )
}