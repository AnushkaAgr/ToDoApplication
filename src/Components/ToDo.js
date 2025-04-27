import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, toggleComplete,deleteTodo }) => {
  return (
    <div className="todo-item">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.complete ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash}  onClick={()=>deleteTodo(task.id)}/>
        
      </div>
    </div>
  );
};

export default ToDo;
