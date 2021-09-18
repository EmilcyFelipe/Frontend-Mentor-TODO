import React, { useEffect } from "react";
import ListComponent from "../List_Component/List_Component";
import "./Todo_Wrapper.css";
import toogleTheme from "../../utils/toogle_theme";
import Sun from "../../images/icon-sun.svg";

export default function TodoWrapper() {

  //Global list that will be the reference
  const [taskList, setTaskList] = React.useState([]);
  //Element that will used on building elements of list process
  const [id, setId] = React.useState(1);
  //Set the value of which theme will vailable
  const [targetTheme, setTargetTheme] = React.useState(true);

  //Get global list saved on localstorage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list"))) {
      setTaskList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  //Save global list on localstorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(taskList));
  }, [taskList]);

  // Make the functions when theme icon clicked
  function handleTheme() {
    setTargetTheme(!targetTheme);
    toogleTheme(targetTheme);
      localStorage.setItem("theme", targetTheme);
  }

  //Get theme data and update on the page
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('theme'))===true) {
        setTargetTheme(true);
        toogleTheme(true);
    }else if(JSON.parse(localStorage.getItem('theme'))===false){
        setTargetTheme(false);
        toogleTheme(false);
    }
  }, []);

  //Add a new element from todo
  function insertElement(e) {
    e.preventDefault();
    const { message } = e.target.elements;
    setTaskList([
      ...taskList,
      {
        id: id,
        message: message.value,
        complete: false,
      },
    ]);
    setId(id + 1);
    message.value = "";
  }

  return (
    <div className="todo-wrapper">
      <div className="todo-banner">
        <h1>T O D O</h1>
        <img
          className="icon-theme"
          alt="icon theme"
          src={Sun}
          onClick={handleTheme}
        />
      </div>
      <div className="input-wrapper">
        <form onSubmit={insertElement}>
          <input className="task-input-icon" type="submit" value="" />
          <input
            className="task-input"
            type="text"
            name="message"
            placeholder="Create a new todo"
          />
        </form>
      </div>
      <ListComponent list={taskList} func={setTaskList} />
      <div className="signature">Made by Felipe de Paula</div>
    </div>
  );
}
