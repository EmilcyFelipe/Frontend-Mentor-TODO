import TaskItem from "../Task_Item/Task_Item";

import './List_Component.css'

export default function ListComponent({list}){
    return(
        <table className="list-wrapper">
            <tbody>
                {list.length>0 && list.map((li)=>(
                    <tr className="row-list">
                       <TaskItem id={li.id} message={li.message}/>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}