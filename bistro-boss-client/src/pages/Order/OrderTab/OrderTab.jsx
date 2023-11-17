import FoodCard from "../../../components/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-6">
      {items?.map((items) => (
        <FoodCard key={items?._id} item={items} />
      ))}
    </div>
  );
};

export default OrderTab;
