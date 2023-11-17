import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-gray-200 mt-10">
      <div className="flex md:flex-row flex-col gap-[2px] justify-center  ">
        {/* left part */}
        <div className="flex-1 w-full flex flex-col gap-2 justify-center items-center  text-center text-white bg-slate-700 py-5">
          <h1 className="text-2xl mb-2 text-gray-400 font-semibold">
            CONTACT US
          </h1>
          <Link>123 ABS Street, Uni 21, Bangladesh</Link>
          <Link>+88 123456789</Link>
          <Link>Mon - Fri: 08:00 - 22:00</Link>
          <Link>Sat - Sun: 10:00 - 23:00</Link>
        </div>
        {/* right part */}
        <div className="flex-1 w-full flex flex-col gap-2   items-center  text-center text-white bg-gray-800 py-5">
          <h1 className="text-2xl mb-2 text-gray-400 font-semibold">
            Follow US
          </h1>
          <p className="text-xl ">Join us on social media</p>
          <div className="space-x-3">
            <Link className="text-2xl btn btn-square btn-outline btn-ghost text-white">
              <FaFacebookF />
            </Link>
            <Link className="text-2xl btn btn-square btn-outline btn-ghost text-white">
              <FaInstagram />
            </Link>
            <Link className="text-2xl btn btn-square btn-outline btn-ghost text-white">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-black text-">
        Copyright © CulinaryCloud. All rights reserved.{" "}
        <span> {year.getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
