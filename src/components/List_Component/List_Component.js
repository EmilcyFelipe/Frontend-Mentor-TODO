import { useEffect, useState } from "react";
import TaskItem from "../Task_Item/Task_Item";

import './List_Component.css'

export default function ListComponent({list}){
    const [listTask, setList] = useState(Array.from(list));

    useEffect(()=>{
        setList(Array.from(list))
    },[list])
    
    
    return(
        <>
        <table className="list-wrapper">
            <tbody>
                {listTask.length>0 && listTask.map((li)=>(
                    <tr className="row-list">
                       <TaskItem id={li.id} message={li.message}/>
                    </tr>
                ))}
            </tbody>
        </table>
        {list.length>0 &&
        <div className="management-wrapper">
            <p>5 items left</p>
            <div className="filters">
                <p>All</p>
                <p>Active</p>
                <p>Complete</p>
            </div>
            <div>Clear Complete</div>

        </div>
        }
        </>
    )
}