import { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import logImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./login.css";
import useAuth from "../../hooks/useAuth";
import MediaLogin from "./MediaLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUserWithEmail } = useAuth();
  // console.log(loginUserWithEmail);
  const [disabled, setDisable] = useState(true);
  const capchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";
  // capcha creator engin
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // handle login form   -----------
  const handleLoginForm = (e) => {
    e.preventDefault();
    const loadingId = toast.loading("Please Wait");
    console.log(e);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    loginUserWithEmail(email, password)
      .then(() => {
        toast.success("Login success", { id: loadingId });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console(err);
        toast.error("Login failed", { id: loadingId });
      });
  };

  // handle capcha validate -----------
  const handleCapchaValidate = () => {
    const value = capchaRef.current.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setDisable(false);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-center bg-cover  md:p-8 p-4  "
    >
      <Helmet>
        <title>Bistro Boss | SignIn</title>
      </Helmet>
      <div className="hero min-h-screen shadow-2xl rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <figure>
              <img src={logImg} alt="" />
            </figure>
          </div>

          <div className="flex-1 card w-full ">
            <form onSubmit={handleLoginForm}>
              <div className="card-body  mx-auto max-w-sm  ">
                <h1 className="text-4xl font-bold text-center my-3">Login</h1>
                {/* email */}

                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>

                {/* password */}
                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>

                {/* capcha typer*/}
                <div className="form-control mm-capcha ">
                  <label htmlFor="" className="label bg-white rounded-lg my-5 ">
                    <LoadCanvasTemplate className="bg-transparent" />
                  </label>
                  <input
                    ref={capchaRef}
                    type="text"
                    placeholder="Enter the captcha above"
                    className="input input-bordered bg-white"
                    // required
                  />
                  {/* capcha button  */}
                  <div
                    onClick={handleCapchaValidate}
                    className="btn btn-outline btn-ghost btn-sm mt-4 text-[#D1A054] hover:bg-[#D1A054] hover:text-white hover:border-transparent"
                  >
                    Validate Capcha
                  </div>
                </div>

                {/* login button   */}
                <div className="form-control mt-4">
                  <button
                    // disabled={disabled}
                    disabled={false}
                    className="btn border-none   bg-[#D1A054] bg-opacity-70 hover:bg-[#D1A054]  text-white text-xl"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            {/* other logiin info */}
            <div className="text-center space-y-2 mb-3 text-lg">
              <p className="text-[#D1A054]">
                New here?{" "}
                <Link to="/register" className="font-bold">
                  Create a new account
                </Link>
              </p>
              <p>Of sign up with</p>
            </div>
            {/* media login */}
            <div>
              <MediaLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
