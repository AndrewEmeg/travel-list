function Item({ item, thatKey, finalDeleteFunction, handleIsPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleIsPacked(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => finalDeleteFunction(thatKey)}>❌</button>
    </li>
  );
}

export default Item;
