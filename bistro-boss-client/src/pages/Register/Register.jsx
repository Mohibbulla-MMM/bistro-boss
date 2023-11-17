import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import logImg from "../../assets/others/authentication2.png";
import MediaLogin from "../Login/MediaLogin";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUserWithEmail, userProfileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle form submit
  const handleonSubmit = (data) => {
    const loadingId = toast.loading("Please Wait");
    console.log(data);
    createUserWithEmail(data.email, data.password)
      .then(() => {
        userProfileUpdate(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              email: data.email,
              name: data.name,
            };
            reset();
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log(res);
              if (res.data.insertedId) {
                toast.success("Register success", { id: loadingId });
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Register failed", { id: loadingId });
      });
  };

  // handle login form   -----------

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-center bg-cover  md:p-8 p-4  "
    >
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen shadow-2xl rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 text-center lg:text-left">
            <figure>
              <img src={logImg} alt="" />
            </figure>
          </div>

          <div className="flex-1 card w-full ">
            <form onSubmit={handleSubmit(handleonSubmit)}>
              <div className="card-body  mx-auto max-w-sm  ">
                <h1 className="text-4xl font-bold text-center my-3">Sigh Up</h1>

                {/* name */}
                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">Name is required *</p>
                  )}
                </div>

                {/* photoUrl */}
                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">Phot URL is required *</p>
                  )}
                </div>

                {/* email */}
                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered bg-white"
                    // required
                  />
                  {errors.email && (
                    <p className="text-red-500 ">Email is require *</p>
                  )}
                </div>

                {/* password */}
                <div className="form-control">
                  <label className="label text-xl uppercase font-semibold text-black ">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/,
                    })}
                    placeholder="password"
                    className="input input-bordered bg-white"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 ">Password required *</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 ">
                      Password minimum 6 characters *
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500 ">
                      Password maximum 20 characters *
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 ">
                      Password must be use <br />1 UPPERCASE, 1 lowercase, 1
                      number and 1 spacial characters
                    </p>
                  )}
                </div>

                <div className="form-control mt-4">
                  <button className="btn border-none   bg-[#D1A054] bg-opacity-70 hover:bg-[#D1A054]  text-white text-xl">
                    Login
                  </button>
                </div>
              </div>
            </form>
            {/* other logiin info */}
            <div className="text-center space-y-2 mb-3 text-lg">
              <p className="text-[#D1A054]">
                Already register?{" "}
                <Link to="/login" className="font-bold">
                  Go to log in
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

export default Register;
