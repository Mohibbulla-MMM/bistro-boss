import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import GooglePopup from "./GooglePopup";

const MediaLogin = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* googe  */}
      <GooglePopup />
      {/* facebook */}
      <span className="btn btn-outline btn-ghost btn-circle text-2xl text-gray-600">
        <FaFacebookF />
      </span>
      {/* github */}
      <span className="btn btn-outline btn-ghost btn-circle text-2xl text-gray-600">
        <AiFillGithub />
      </span>
    </div>
  );
};

export default MediaLogin;
