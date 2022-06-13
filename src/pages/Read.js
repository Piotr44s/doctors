import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

import React from 'react'
import { useSelector } from 'react-redux'

const selectDoctors = (state) => state.doctors



function Read() {
  const doctors = useSelector(selectDoctors)




  const renderedListDoctors = doctors.map((item) => {
    return (<h1>{item}</h1>)
  })

  return (<ul >{renderedListDoctors}</ul>)
}






// return (
//   <div>
//     <h1>{doctors}</h1>

//   </div>
// );


export default Read






// const TodoList = () => {


//   const renderedListItems = todos.map((todo) => {
//     return <TodoListItem key={todo.id} todo={todo} />
//   })

//   return <ul className="todo-list">{renderedListItems}</ul>
// }

// export default TodoList