import './Task_Item.css'
import Check from '../../images/icon-check.svg'
export default function TaskItem({id,message,list,setList}){
   
    var identifier=null;
    function handleStatus(e){
        const li = Array.from(list);
        identifier = e.currentTarget.id.split('-')[0];
        let arrayIndex = null;
        for(var i=0; i<li.length;i++){
            if(li[i].id === parseInt(identifier)){
                arrayIndex = i;
            }
        }
        li[arrayIndex].complete = !li[arrayIndex].complete;
         
        setList(li)
        if(li[arrayIndex].complete===true){
            document.getElementById(`${identifier}-task`).classList.add('checked')
            document.getElementById(`${identifier}-task`).innerHTML=`<img src=${Check} alt='check'/>`
            document.getElementById(`${identifier}-task-wrapper`).children[1].classList.add('completed')
        }else{
            document.getElementById(`${identifier}-task`).classList.remove('checked')
            document.getElementById(`${identifier}-task`).innerHTML=""
            document.getElementById(`${identifier}-task-wrapper`).children[1].classList.remove('completed')
        }
    }
    return(
        <div id={`${id}-task-wrapper`}  className="task-wrapper">
            <div id={`${id}-task`} className="task-select" onClick={handleStatus}>
                
            </div>
            <p className="task-message">{`${id} ola ${message}`}</p>
        </div>
    );
}