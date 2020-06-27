import React, { useState } from 'react';

/*
  component for creating to-do list
*/

const Todo = () => {
  const [todo, setTodo] = useState({ //for each individual tasks
    id: '',
    body: '',
    completed: false
  })
  let [count, setCount] = useState(0); //keeps count of id
  const [list, setList] = useState({}); //list of task objs
  let [displayList, setDisplayList] = useState([]); //list of tasks, jsx format
  let [displayChecked, setDisplayChecked] = useState([]); //list of checked tasks, jsx format

  //create jsx element of to-do list items
  const createList = () => {
    const displayItem = (
      <div key={`item${count}`}>
        <input type='checkbox' onClick={() => checkItem(count)}></input>
        {list[count].body}
        <button onClick={() => deleteItem(count)}>Remove</button>
      </div>
    );
    displayList.push(displayItem);
    setDisplayList(displayList);
  }

  //update displayList after delete/checkbox
  const updateList = () => {
    const updated = [];
    displayChecked = [];

    for (const k in list) {
      const updatedItem = (
        <div key={`item${k}`}>
            <input type='checkbox' onClick={() => checkItem(k)}></input>
            {list[k].body}
            <button onClick={() => deleteItem(k)}>Remove</button>
        </div>);  

      //pushed into diff array based on checkbox status
      if(!list[k].completed) updated.push(updatedItem);  
      else displayChecked.push(updatedItem);
    }
    setDisplayList(updated);
    setDisplayChecked(displayChecked);
  }

  //invoked with delete button click
  const deleteItem = (id) => {
    delete list[id];
    updateList();
  }

  //invoked with checkbox click
  const checkItem = (id) => {
    if(!list[id].completed) list[id].completed = true;
    else list[id].completed = false;

    updateList();
  }

  return (
    <div>
      <form onSubmit={(e) => {
        // console.log('list', list);
        todo.id = count;
        todo.completed = false;
        list[count] = todo;
        setList(list);
        setCount(count+1);
        setTodo({...todo, body: ''}); //intialize todo, empty textbox

        createList();

        e.preventDefault();
      }}>
        <input type='text' 
          value={todo.body}
          onChange={(e) => { 
            setTodo({...todo, body: e.target.value});
          }}
          value={todo.body}
        ></input>
        <button>Create</button>
      </form>
      <div id='todoList'>
        {displayList.concat(displayChecked)}
      </div>
    </div>
  )
}

export default Todo;