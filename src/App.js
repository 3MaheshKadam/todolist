  import React, { useState } from 'react';
  import './App.css';
  import ToDoList from './ToDoList';

  function App() {
    const [item, updateItem] = useState("Enter item");
    const [listitem, updateListItem] = useState([]);

    const itemChangeEvent = (event) => {
      updateItem(event.target.value);
    }

    const listItemEvent = () => {
      updateListItem((oldItems) => [...oldItems, item]);
      updateItem(""); // Clear the input field after adding the item to the list
    }

    const deleteItem=(id)=>{
            console.log("deleted");
            updateListItem((oldItems)=>{
              return oldItems.filter((arrElem, index) => {
                return index != id;
              });
            });
        }

    return (
      <>
        <div className='main_div'>
          <div className='center_div'>
            <br />
            <h1> Todo list </h1>
            <br />
            <input type="text" placeholder="Add an Item" value={item} onChange={itemChangeEvent} />
            <button onClick={listItemEvent} className="newBtn">+</button>
            <ol>
              {listitem.map((arrval, index) => (
                //  <li key={index}>{arrval}</li>
                <ToDoList  key={index} id={index} text ={arrval}
                onSelect={deleteItem}
                />
              ))}
            </ol>
          </div>
        </div>
      </> 
    );
  }

  export default App;
