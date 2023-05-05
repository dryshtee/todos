import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm'
import ItemList from "./ItemList";
import './App.css';

function App() {
  /**
   * items in a state variable
   * setter function used to update items
   */
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  /**
   * set todo data to local storage whenever we update items in the Todo list
   * sets a key-value pair in the local storage with the key being items and
   * the value being a JSON representation of our items
   */

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO Items</h1>
        <ItemList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />
      </header>
    </div>
  );
}

export default App;