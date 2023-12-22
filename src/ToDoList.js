    import React from "react";

    function ToDoList (props){
        
        return(
            <div className="todo_style">
                <li >{props.text} </li> <hr  /> <hr/>
                <button className ="fa fa-times"onClick={()=>{
                    props.onSelect(props.id);
                }} aria-hidden ="true" >❌</button>               

            </div>
        );
    }
    export default ToDoList;