import React, { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [name, setName] = useState('');
  const [item, setItem] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
     alert('please enter a valid name');
    }
    else if (name && isEditing) {
      setItem(
        item.map((newItem) => {
          if (newItem.id === editId) {
            return { ...newItem, title: name }
          }
          return newItem
        })
      )

      setName('');
      setEditId(null);
      setIsEditing(false);
    }

    else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setItem([...item, newItem]);
      setName('');
    }
  }

  const removeItem = (id) => {
    setItem(item.filter((list) => list.id !== id))
  }

  const editItem = (id) => {
    const specificItem = item.find((newList) => newList.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  return (
    <section className="section-center">
      <form className="form-control" onSubmit={handleSubmit}>
        <h4>Grocery List</h4>
        <div className="form-details">
          <input type="text" className="input" placeholder="e.g eggs" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="btn">
            {isEditing ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <List items={item} removeItem={removeItem} editItem={editItem} />
      <button className="clear-btn"
        onClick={() => setItem([])}>Clear All</button>
    </section>
  );
}

export default App;
