import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Link to='/' className="text-black uppercase">
      <p className="text-lg  ">BISTRO BOSS</p>
      <p className="text-xs tracking-[4px]">Restaurant</p>
    </Link>
  );
};

export default SiteLogo;
