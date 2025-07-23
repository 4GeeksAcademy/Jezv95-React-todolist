import React, { useState } from 'react'



const ToDoList = () => {

    const [Tasks, setTasks] = useState(['Make the Bed', 'Wash My Hands', 'Eat', 'Walk the dog'])
    const [Input, setInput] = useState('')


    //  let Tasks = ['Make the Bed','Wash My Hands','Eat','Walk the dog']

    let EmptyList = ['none','inline']

    function addTask() {
        setTasks([...Tasks, Input])

    }
    function KeyPress(e) {
        if (e.key == 'Enter') {
            addTask()
        }
    }

    const deleteTask = (index) => {
        setTasks(Tasks.filter((_, i) => i !== index));  
    };

      

    return (
        <>
            <div className='container-fluid row justify-content-center text-body-tertiary '>
                <h1 className='display-1 d-flex justify-content-center'>To Do List</h1>
                    <div className="card  col-4 justify-content-center shadow-lg" >
                        <input type="text" onKeyDown={KeyPress} value={Input} 
                            onChange={(e) => setInput(e.target.value)} className="fs-4 list-group-item p-2"
                            id="exampleFormControlInput1" placeholder="What needs to be done?" />
                    <ul className="list-group list-group-flush">
                       
                        {Tasks.map((TasksItem, index) => <li key={index} className='list-group-item fs-4'>{TasksItem} <button  onClick={() => deleteTask(index)} className='btn delete'>X</button> </li>)}
                    </ul>
                        {Tasks.length > 0 ? (
					<div className='list-group-item fs-6 p-2'>
						{Tasks.length} item{Tasks.length === 1 ? '' : 's'} left
					</div>) : (
					<div className='list-group-item fs-6 p-2'>
						No tasks, add a Tasks
					</div>)}
                    </div>
            </div>


        </>
    );
};
//<button onClick={addTask}>Agregar Tarea </button>
export default ToDoList;