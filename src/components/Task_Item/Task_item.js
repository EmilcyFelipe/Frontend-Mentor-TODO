import './Task_Item.css'
export default function TaskItem({id,message}){
    return(
        <div className="task-wrapper">
            <div id={`${id}-task`}className="task-select"></div>
            <p className="task-message">{message}</p>
        </div>
    );
}