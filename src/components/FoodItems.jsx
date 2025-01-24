import Item from "./Item";
const foodItems = () => {
  const foodItems = ["Apple", "Banana", "Carrot", "Donut"];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default foodItems;
