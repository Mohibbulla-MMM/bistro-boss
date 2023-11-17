import useMenu from "./useMenu";

const useMenuCategory = () => {
  const [menu] = useMenu();
  const salad = menu?.filter((item) => item?.category === "salad");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const dessert = menu?.filter((item) => item?.category === "dessert");
  const offered = menu?.filter((item) => item?.category === "offered");
  const soup = menu?.filter((item) => item?.category === "soup");
  const drinks = menu?.filter((item) => item?.category === "drinks");
  const all = { salad, pizza, dessert, offered, soup, drinks };

  return all;
};

export default useMenuCategory;
