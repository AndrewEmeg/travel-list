import { useState } from "react";
import Item from "./Item";

function ParkingList({ list, onDeleteItems, onIsPacked, clearList }) {
  const [sortBy, setSortBy] = useState("alphabet");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = list;
  } else if (sortBy === "alphabet") {
    sortedItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = list
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((eachItem) => (
          <Item
            item={eachItem}
            thatKey={eachItem.id}
            handleIsPacked={onIsPacked}
            key={eachItem.id}
            finalDeleteFunction={onDeleteItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="alphabet">Sort by Alphabetical Order</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}

export default ParkingList;
