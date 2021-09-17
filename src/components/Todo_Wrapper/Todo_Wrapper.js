import React, { useEffect } from 'react'
import ListComponent from '../List_Component/List_Component'
import './Todo_Wrapper.css'
import toogleTheme from '../../utils/toogle_theme'
import Sun from '../../images/icon-sun.svg'



export default function TodoWrapper(){
    const [taskList,setTaskList] = React.useState([])
    const [id,setId] = React.useState(1);
    const [targetTheme,setTargetTheme] = React.useState(true)

    useEffect(()=>{
        if(localStorage.getItem('theme')){
            setTargetTheme(()=>{
                toogleTheme(Boolean(localStorage.getItem('theme')))
                return(
                    Boolean(localStorage.getItem('theme'))
                )
            })
        }
       
    },[])

   useEffect(()=>{
       if(JSON.parse(localStorage.getItem('list'))){
           setTaskList(JSON.parse(localStorage.getItem('list')))
       }
   },[])

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(taskList))
    },[taskList]);

    function handleTheme(){
        localStorage.setItem('theme',targetTheme);
        toogleTheme(targetTheme);
        setTargetTheme(!targetTheme);
    }

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
                <img className="icon-theme" alt='icon theme' src={Sun} onClick={handleTheme}/>
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