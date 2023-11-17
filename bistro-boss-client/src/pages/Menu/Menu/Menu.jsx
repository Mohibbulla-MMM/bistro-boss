import { Helmet } from "react-helmet-async";
import PageCover from "../../shared/PageCover/PageCover";
import img from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenuCategory from "../../../hooks/useMenuCategory";
 
const Menu = () => {
  const titleText = "OUR MENU";
  const desText = "Would YOU LIKE TO TRY A DISH?";

  // const [menu] = useMenu();

  const { salad, pizza, dessert, offered, soup } = useMenuCategory();
  // const salad = menu?.filter((item) => item?.category === "salad");
  // const pizza = menu?.filter((item) => item?.category === "pizza");
  // const dessert = menu?.filter((item) => item?.category === "dessert");
  // const offered = menu?.filter((item) => item?.category === "offered");
  // const soup = menu?.filter((item) => item?.category === "soup");
  // console.log({ salad, pizza, dessert, offered, soup });
  // console.log(menu);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* <p>menu page</p> */}

      <PageCover bgImg={img} titleText={titleText} desText={desText} />

    
      <section className="my-5 mt-10">
        <SectionTitle heading={"Today's offer"} subHeading="Don't miss" />
      </section>
      <MenuCategory items={offered} heading={"offered"} />

      <MenuCategory
        items={dessert}
        img={dessertImg}
        heading={"dessert"}
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur nisi quod magni inventore omnis adipisci."
        }
      />

      <MenuCategory
        items={pizza}
        img={pizzatImg}
        heading={"pizza"}
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur nisi quod magni inventore omnis adipisci."
        }
      />
      <MenuCategory
        items={salad}
        img={saladImg}
        heading={"salad"}
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur nisi quod magni inventore omnis adipisci."
        }
      />
      <MenuCategory
        items={soup}
        img={soupImg}
        heading={"soups"}
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur nisi quod magni inventore omnis adipisci."
        }
      />
    </div>
  );
};

export default Menu;
