import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import useSingleMenu from "../../../hooks/useSingleMenu";

const ManageUpdateItem = () => {
  const { id } = useParams();
  // console.log(id);
  const [singleMenu] = useSingleMenu(id);
  // console.log(singleMenu);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const loadingId = toast.loading("Uploading...");
    console.log(data);

    const itemData = {
      name: data.recipeName,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    
    console.log(itemData);
    const sendDataRes = await axiosSecure.patch(`/menu/${id}`, itemData);
    console.log(sendDataRes);

    if (sendDataRes.data.acknowledged) {
      toast.success("Upload success", { id: loadingId });
    }
  };
  return (
    <div className="space-y-8 my-8">
      <SectionTitle heading={"Add an item"} subHeading={`What's a New`} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          <div className="bg-gray-200 p-5 rounded space-y-4">
            {" "}
            {/* recipe name */}
            <div className="">
              <label htmlFor="recipeName" className="font-semibold text-lg ">
                {" "}
                Recipe Name *
              </label>
              <input
                defaultValue={singleMenu.name}
                name="recipeName"
                placeholder="Recipe name"
                {...register("recipeName", { required: true })}
                className=" bg-white rounded-md w-full block px-4 p-2 text-lg"
              />
              {errors.recipeName && (
                <span className="text-red-600   px-2 p-1 inline-block">
                  Recipe name is required
                </span>
              )}
            </div>
            {/* category and price  */}
            <div className="flex sm:flex-row flex-col  gap-4 ">
              {/* category  */}
              <div className="flex-1">
                <label htmlFor="category" className="font-semibold text-lg">
                  Select Category
                </label>

                <select
                  name="category"
                  {...register("category", { required: true })}
                  defaultValue={singleMenu?.category}
                  className=" bg-white rounded-md w-full block px-4 p-3 text-lg"
                >
                  <option value={" "} disabled>
                    Please select a category
                  </option>
                  <option value="dessert">dessert</option>
                  <option value="drinks">drinks</option>
                  <option value="offered">offered</option>
                  <option value="salad">salad</option>
                  <option value="soup">soup</option>
                  <option value="pizza">pizza</option>
                </select>
                {errors.category && (
                  <span className="text-red-600">
                    Category select is required
                  </span>
                )}
              </div>

              {/* price */}
              <div className="flex-1">
                <label htmlFor="price" className="font-semibold text-lg">
                  Price
                </label>
                <input
                  defaultValue={singleMenu?.price}
                  type="number"
                  name="price"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className=" bg-white rounded-md w-full block px-4 p-2 text-lg"
                />
                {errors.price && (
                  <span className="text-red-600   px-2 p-1 inline-block">
                    Recipe Price is required
                  </span>
                )}
              </div>
            </div>
            {/* Details  */}
            <div>
              <label htmlFor="recipe" className="font-semibold text-lg">
                Recipe Details
              </label>
              {/* recipe Details */}
              <textarea
                defaultValue={singleMenu?.recipe}
                name="recipe"
                rows="8"
                {...register("recipe", { required: true })}
                className="w-full block  bg-white rounded-md border-none p-4"
              ></textarea>
              {errors.description && (
                <span className="text-red-600   px-2 p-1 inline-block">
                  Recipe details is required
                </span>
              )}
            </div>
            {/* image  */}
            {/* <div>
              <input
                name="image"
                type="file"
                {...register("image", { required: true })}
                className="   rounded-md w-full block  py-2 text-lg"
              />
              {errors.image && (
                <span className="text-red-600   px-2 p-1 inline-block">
                  Recipe image is required
                </span>
              )}
            </div> */}
            {/* submit button  */}
            <input
              type="submit"
              value={"Update Item"}
              className="btn rounded-none bg-yellow-600 text-white border-none w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageUpdateItem;
