import React, { useEffect, useState } from 'react'



const ToDoList = () => {

    const [tasks, setTasks] = useState(['Make the Bed', 'Wash My Hands', 'Eat', 'Walk the dog'])
    const [input, setInput] = useState('')


 

    let EmptyList = ['none','inline']

   
    function keyPress(e) {
        if (e.key == 'Enter') {
            addTask()
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));  
    };

       function addTask(){

        const requestOptions={
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                    "label": input,
                    "is_done": false,
                })
        };
        fetch('https://playground.4geeks.com/todo/todos/Jesus', requestOptions)
        .then((response)=> response.json())
        .then(()=> listTasks());
        setInput('')
       }

               
     function listTasks(){
        fetch('https://playground.4geeks.com/todo/users/Jesus')
        .then((response)=> response.json())
        .then((data)=> setTasks(data.todos));
        
    }
      


     function removeTask(id){
        const requestOptions={
            method: 'DELETE',
            Reflect:"follow"
        };
        fetch('https://playground.4geeks.com/todo/todos/'+id , requestOptions)
        .then((response)=> response.text())
        .then(()=> listTasks());
        
        
        
    }   

    useEffect(()=>{
        listTasks()
    },[])

    return (
        <>
            <div className='container row justify-content-center text-body-tertiary '>
                <h1 className='display-1 d-flex justify-content-center'>To Do List</h1>
                    <div className="card  col-4 justify-content-center shadow-lg" >
                        <input type="text" onKeyDown={keyPress} value={input} 
                            onChange={(e) => setInput(e.target.value)} className="fs-4 list-group-item p-2"
                            id="exampleFormControlInput1" placeholder="What needs to be done?" />
                    <ul className="list-group list-group-flush">
                       
                        {tasks.map((task, index) => <li key={index} className='list-group-item fs-4 d-flex justify-content-between'>{task.label} <button  onClick={() => removeTask(task.id)} className='btn delete' role='button' >X</button> </li>)}
                    </ul>
                        {tasks.length > 0 ? (
					<div className='list-group-item fs-6 p-2'>
						{tasks.length} item{tasks.length === 1 ? '' : 's'} left
					</div>) : (
					<div className='list-group-item fs-6 p-2'>
						No tasks, add a Tasks
					</div>)}
                    </div>
            </div>


        </>
    );
};
export default ToDoList;