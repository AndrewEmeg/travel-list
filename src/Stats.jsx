function Stats({ list }) {
  if (list.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numList = list.length;
  let numPacked = 0;
  list.forEach((eachItem) => {
    eachItem.packed && (numPacked += 1);
  });

  const percentPacked = Math.round((numPacked / numList) * 100);
  console.log(percentPacked);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You're all set and ready to go 🚀"
          : `💼 You have ${numList} items in your list, and you already packed ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}

export default Stats;
