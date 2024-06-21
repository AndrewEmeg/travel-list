import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Plates", quantity: 9, packed: true },
  { id: 4, description: "Batteries", quantity: 5, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newestItem) {
    setItems((previousItemsList) => [...previousItemsList, newestItem]);
  }

  function handleDeleteItem(key) {
    console.log(items);
    setItems((previousItemsList2) => {
      console.log(previousItemsList2);
      previousItemsList2.forEach((item) => {
        item.id === key &&
          previousItemsList2.splice(previousItemsList2.indexOf(item, 1));
        return previousItemsList2;
      });
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList list={items} onDeleteItems={handleDeleteItem} />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div>
      <h1>🏝️ Far Away 💼</h1>
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setContent] = useState("");
  const [quantity, setSelect] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: true };
    console.log(e.target);
    onAddItems(newItem);

    setContent("");
    setSelect(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setSelect(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setContent(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function ParkingList({ list, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {list.map((list) => (
          <Item item={list} key={list.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items in your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
