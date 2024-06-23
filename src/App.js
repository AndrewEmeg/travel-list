import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ParkingList from "./ParkingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newestItem) {
    setItems((previousItemsList) => [...previousItemsList, newestItem]);
  }

  function handleDeleteItem(key) {
    setItems((previousItemsList) => {
      const newItemsList = [...previousItemsList];
      newItemsList.forEach((item) => {
        if (item.id === key) {
          newItemsList.splice(newItemsList.indexOf(item), 1);
        }
      });
      return newItemsList;
    });
  }

  function handleIsPacked(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      })
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    confirmed && setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        list={items}
        onIsPacked={handleIsPacked}
        onDeleteItems={handleDeleteItem}
        clearList={clearList}
      />
      <Stats list={items} />
    </div>
  );
}

export default App;
