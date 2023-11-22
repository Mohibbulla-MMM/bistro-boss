import { AiOutlineGoogle } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useUserSave from "../../hooks/useUserSave";

const GooglePopup = () => {
  const { loginUserWithEmailPopup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);
  const from = location.state?.from?.pathname || "/";
  // const handle google login popup
  const handleGoogleLoginPupup = () => {
    const loadingId = toast.loading("Please wait");
    loginUserWithEmailPopup()
      .then(async (res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        useUserSave(userInfo);
        // console.log(res);
        toast.success("Login success", { id: loadingId });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed", { id: loadingId });
      });
  };

  return (
    <>
      <span
        onClick={handleGoogleLoginPupup}
        className="btn btn-outline btn-ghost btn-circle text-2xl text-gray-600 "
      >
        <AiOutlineGoogle />
      </span>
    </>
  );
};

export default GooglePopup;
