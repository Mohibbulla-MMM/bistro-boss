import PageCover from "../../shared/PageCover/PageCover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenuCategory from "../../../hooks/useMenuCategory";
import OrderTab from "../OrderTab/OrderTab";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const categories = ["all", "salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  // console.log(category);
  const initialTabs = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabs);
  const { salad, pizza, dessert, drinks, soup } = useMenuCategory();
  //   console.log({salad, pizza, dessert, offered, soup});
  return (
    <div>
      <PageCover
        bgImg={orderImg}
        titleText={"Our shop"}
        desText="would you lide to try a dish?"
      />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>All</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        {/* all items */}
        <TabPanel>
          <OrderTab items={menu} />
        </TabPanel>

        {/* Salad items */}
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>

        {/* pizza items */}
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>

        {/* dessert items */}
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>

        {/* soup items */}
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>

        {/* drinks items */}
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
