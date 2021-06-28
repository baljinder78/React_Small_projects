import React,{useState} from "react";

const Todolist =(props)=>
{
    let [tasklist,settasklist]=useState([]);
    function addtask()
    {
        let val=document.getElementById("task").value;
        var task=[...tasklist];
        task.push(val);
        settasklist(task);
    }
    function removetask(e)
    {
        let key = e.target.value;
        var task = [...tasklist];
        task.splice(key,1);
        settasklist(task);
    }
    function taskdone(e){
        e.target.style = 'text-decoration: line-through;';
    }
    return (
      <div>
        <div>
          <input type='text' id='task' placeholder='Enter your task...' />
          <button onClick={() => addtask()}>Add task</button>
        </div>
        {tasklist.map((task, i) => (
          <div key={i}>
            <h3 onClick={(e)=>taskdone(e)}>{task}</h3>
            <button value={i} onClick={(e)=>removetask(e)}>X</button>
          </div>
        ))}
      </div>
    );

}

export default Todolist;