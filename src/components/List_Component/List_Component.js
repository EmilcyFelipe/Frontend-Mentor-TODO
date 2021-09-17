import { useEffect, useState } from "react";
import TaskItem from "../Task_Item/task_item";

import "./List_Component.css";

export default function ListComponent({list,func}) {
  const [listTask, setListTask] = useState(Array.from(list));

  useEffect(() => {
    setListTask(Array.from(list));
  }, [list]);

  

  function filterAction(e){
      if(e.target.innerText==='All'){
          setListTask(list)
      }else if(e.target.innerText==='Active'){
          setListTask(
              list.filter((lt) => lt.complete===false)
          )
      }else if(e.target.innerText==='Complete'){
        setListTask(
            list.filter((lt) => lt.complete===true)
        )
      }
  }


  function clearComplete(){
    func(
        list.filter((lt) => lt.complete===false)
    )
  }

  return (
    <div className="list-wrapper">
      <table>
        <tbody>
          {listTask.length > 0 &&
            listTask.map((li) => (
              <tr key={li.id} className="row-list">
                  <td>
                        <TaskItem id={li.id} message={li.message} list={listTask} setList={setListTask} gList={list} gSetList={func}/>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
      {list.length>0 && (
        <div className="management-wrapper">
          <p>{listTask.filter((lt)=>lt.complete===false).length} item{listTask.filter((lt)=>lt.complete===false).length>1 && "s"} left</p>
          <div className="filters-wrapper">
            <div onClick={filterAction}>All</div>
            <div  onClick={filterAction}>Active</div>
            <div  onClick={filterAction}>Complete</div>
          </div>
          <div onClick={clearComplete}>Clear Complete</div>
        </div>
      )}
    </div>
  );
}
