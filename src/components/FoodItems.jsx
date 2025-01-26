import Item from "./Item";

const FoodItems = ({ fitems }) => {
  return (
    <ul className="list-group">
      {fitems && fitems.map((item) => <Item key={item} foodItem={item} />)}
    </ul>
  );
};

export default FoodItems;
