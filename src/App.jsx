import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "20-11-2023",
    },
    {
      name: "Buy Bread",
      date: "21-12-2024",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;

// function App() {
//   let foodItems = ["item1", "item2", "rice", "item 3"];
//   return (
//     <>
//       <h1>Food Items</h1>
//       <ul>
//         {foodItems.map((item) => {
//           <li>{item}</li>;
//         })}
//       </ul>
//     </>
//     // <center className="todo-container">
//     //   <AppName />
//     //   <AddTodo />
//     //   <div className="items-container">
//     //     <TodoItem1 />
//     //     <TodoItem2 />
//     //   </div>
//     // </center>
//   );
// }

// Export App component as default

// let foodItems = ["item1", "item2", "rice", "item 3"];
// let foodItems = [];
// if (foodItems.length === 0) {
//   return <h1>i am still hungry</h1>;
// }
// let emptyMessage = foodItems.length === 0 ? <h1>i am hungry</h1> : null;

/* conditional statement to show tital and also condition based programs
 */

/* {foodItems.length === 0 ? <h1>i am hungry</h1> : null} */

/* {emptyMessage} */

/* logical operator */

/* {foodItems.length === 0 && <h1>i am now hungry</h1>} */
