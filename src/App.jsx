// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Kgbutton from "./sbutton"; // Import Kgbutton component
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  // let foodItems = ["item1", "item2", "rice", "item 3"];
  let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h1>i am still hungry</h1>;
  // }
  return (
    <>
      <h1>Food Items</h1>
      {/* conditional statement to show tital and also condition based programs
       */}
      {foodItems.length === 0 ? <h1>i am hungry</h1> : null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item}>{item}</li> // Implicit return of <li>
        ))}
      </ul>
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
