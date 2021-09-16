import './Task_Item.css'
export default function TaskItem({id,message,list,setList}){
    function handleStatus(e){
        let li = Array.from(list);
        li[0].complete=!li[0].complete;
        setList(li)
    }
    return(
        <div className="task-wrapper">
            <div id={`${id}-task`}className="task-select" onClick={handleStatus}></div>
            <p className="task-message">{message}</p>
        </div>
    );
}