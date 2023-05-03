import { useState } from "react";
import './App.css';

const App = () => {
  /**
   * useState hook is used to maintain track of the state inside the component - takes a 
   * state's initial value and returns an array with two values:
   * the first is a getter function that displays the defined state's current value
   * the second is a setter function that updates the state
   */
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  /**
   * Important: the state should never be direectly mutated
   * A copy of the Todos array, using the Array spread operator 
   * is created before adding todo items to it.
   */
  const addTodo = () => {
    if(todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  /**
   * onClick function triggers when delete button is clicked
   * filter() - used to construct a new array with all the entries that meet the stated 
   * criteria.
   */
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }

  /**
   * ternary operator - used to display the list items + if list is empty
   * map()- iterate over the elements in the array and display as <li> inside <ul> element
   */

  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODO App</h1>
      </header>
      <div className="input-wrapper">
        <input 
          type="text" 
          name="todo" 
          value={todo}
          placeholder="Create a new todo" 
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />
          <button className="add-button" onClick={addTodo}>Add</button>
      </div>
      
      {todos?.length > 0 ? (
              <ul className="todo-list">
              {todos.map((todo, index) => (
                <div className="todo">
                  <li key={index}>{todo}</li>
                  <button className="delete-button" 
                    onClick={
                      () => {deleteTodo(todo);}
                      }
                    >
                      Delete
                    </button>
                </div>
              ))}
            </ul>
      ) : (
        <div className="empty">
          <p>no task found</p>
        </div>
      )}

      </div>
  );
}

export default App;