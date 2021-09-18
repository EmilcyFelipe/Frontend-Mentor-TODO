import { useEffect, useState } from "react";
import TaskItem from "../Task_Item/Task_item";

import "./List_Component.css";

export default function ListComponent({list,func}) {
  
  //create a new instance of the global list
  const [listTask, setListTask] = useState(Array.from(list));

  //Update the local list when global one is modified
  useEffect(() => {
    setListTask(Array.from(list));
  }, [list]);

  //function to filter the local list 
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

  //Function to clear the items finished of the global list
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
            <div className="filter" onClick={filterAction}>All</div>
            <div className="filter" onClick={filterAction}>Active</div>
            <div className="filter" onClick={filterAction}>Complete</div>
          </div>
          <div onClick={clearComplete}>Clear Complete</div>
        </div>
      )}
    </div>
  );
}
