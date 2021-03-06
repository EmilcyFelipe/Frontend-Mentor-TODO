import "./Task_item.css";
import Check from "../../images/icon-check.svg";
import Cross from "../../images/icon-cross.svg";

export default function TaskItem({
  id,
  message,
  list,
  setList,
  gList,
  gSetList,
}) {
  //Function that handle with changes of item tasks when status changed
  function handleStatus(e) {
    var identifier = null;
    const li = Array.from(list);
    let arrayIndex = null;

    //Split the piece of id to use like reference
    identifier = e.currentTarget.id.split("-")[0];

    //Search in array the element.id which matches with identifier
    for (let i = 0; i < li.length; i++) {
      if (li[i].id === parseInt(identifier)) {
        arrayIndex = i;
      }
    }

    //Toogle the value of element.complete
    li[arrayIndex].complete = !li[arrayIndex].complete;

    //Update the global list
    setList(li);

    //Assign the changes and withdraw if the values matches
    if (li[arrayIndex].complete === true) {
      document.getElementById(`${identifier}-task`).classList.add("checked");
      document
        .getElementById(`${identifier}-task-wrapper`)
        .children[1].classList.add("completed");
    } else {
      document.getElementById(`${identifier}-task`).classList.remove("checked");
      document
        .getElementById(`${identifier}-task-wrapper`)
        .children[1].classList.remove("completed");
    }
  }

  //Preserve the changes when the list rebuild from filters
  let idPreserve = null;
  for (let i = 0; i < list.length; i++) {
    if (id === list[i].id) {
      idPreserve = i;
    }
  }

  //remove item of global list when cross were clicked
  function removeItem(e) {
    var wdlist = Array.from(gList);
    let identifier = null;
    let idElement = e.currentTarget.id.split("-")[0];
    console.log(idElement);
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === parseInt(idElement)) {
        identifier = i;
        console.log(identifier);
      }
    }
    console.log(identifier);
    wdlist.splice(identifier, 1);
    gSetList(wdlist);
  }

  return (
    <div id={`${id}-task-wrapper`} className="task-wrapper">
      <div
        id={`${id}-task`}
        className={
          list[idPreserve].complete ? "task-select checked" : "task-select"
        }
        onClick={handleStatus}
      >
        {list[idPreserve].complete && <img src={Check} alt="check" />}
      </div>
      <p className="task-message">{message}</p>
      <div
        id={`${id}-cross`}
        onClick={(e) => {
          removeItem(e);
        }}
      >
        <img src={Cross} alt="cross" />
      </div>
    </div>
  );
}
