import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, loader] = useMenu();

  if (loader) {
    return (
      <div className="">
        <p>Please Wait</p>
      </div>
    );
  }
  const popularMenu = menu?.filter((item) => item?.category === "popular");

 
  return (
    <section>
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {popularMenu &&
          popularMenu?.length > 0 &&
          popularMenu?.map((item) => <MenuItem key={item?._id} item={item} />)}
      </div>
    </section>
  );
};

export default PopularMenu;
