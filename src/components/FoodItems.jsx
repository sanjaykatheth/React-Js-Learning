const foodItems = () => {
  let foodItems = ["item1", "item2", "rice", "item 3"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item}>{item}</li> // Implicit return of <li>
      ))}
    </ul>
  );
};

export default foodItems;
