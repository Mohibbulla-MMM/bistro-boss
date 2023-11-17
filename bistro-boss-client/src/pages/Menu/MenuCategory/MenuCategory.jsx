import { Link } from "react-router-dom";
import MenuItem from "../../shared/MenuItem/MenuItem";
import PageCover from "../../shared/PageCover/PageCover";

const MenuCategory = ({ items, img, heading, subHeading }) => {
  return (
    <div className="my-10">
      {heading && img && (
        <PageCover bgImg={img} titleText={heading} desText={subHeading} />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
        {items &&
          items?.length > 0 &&
          items?.map((item) => <MenuItem key={item?._id} item={item} />)}
      </div>
      <div className="text-center">
        <Link to={`/order/${heading}`}>
          <button className="btn btn-ghost   border-0 border-b-2 border-black bg-transparent text-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
