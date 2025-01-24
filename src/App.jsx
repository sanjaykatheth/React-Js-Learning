// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Kgbutton from "./sbutton"; // Import Kgbutton component
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/FoodItems";

function App() {
  return (
    <>
      <h1>Food Items</h1>
      <FoodItems />
      <ErrorMessage />
    </>
  );
}

export default App; // function App() {
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
