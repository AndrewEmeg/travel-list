import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setContent] = useState("");
  const [quantity, setSelect] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };

    // console.log(e.target);
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
          // console.log(e.target.value);
          setContent(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
