import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { addToCart, addToWishlist } from "../utils";

const ProductDetails = () => {
  const { pathname } = useLocation();
  const isDashboard = () =>
    pathname === "/dashboard" || /^\/product\/\d+$/.test(pathname);

  const { product_id } = useParams();

  const allProducts = useLoaderData();
  const singleProduct = allProducts.find(
    (product) => product.product_id == product_id
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div
        className={` ${
          isDashboard() ? "mx-0 " : "mx-9"
        } bg-[#9538E2] pt-12 md:pt-10 pb-12 md:pb-48 md:mb-[500px]  relative`}
      >
        <h1 className="text-3xl text-center font-bold text-white">
          Product Details
        </h1>
        <p className="text-white text-center pb-7">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br /> to the coolest accessories, we have
          it all!
        </p>

        <div className=" p-5 border-2 shadow-xl md:h-[520px] md:w-[70%] mx-auto bg-white md:rounded-3xl flex flex-col md:flex-row gap-5 md:absolute top-1/2 left-[16%]">
          <div className="md:w-1/2 ">
            <img
              src={singleProduct.product_image}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="md:w-1/2 space-y-5 ">
            <h1 className="text-3xl font-bold">
              {singleProduct.product_title}
            </h1>
            <p className="text-gray-700 font-bold text-lg ">
              Price : {singleProduct.price}$
            </p>
            <button className="btn btn-md rounded-full text-[#309C08] border-[#309C08] px-5 border-2 font-bold">
              In Stock
            </button>
            <p className="font-semibold">{singleProduct.description}</p>
            <div>
              <p className="font-bold text-lg">Specification:</p>
              <ul className="list-disc list-inside">
                {singleProduct.specification.map((specification) => (
                  <li key={specification} className="list-disc">
                    {specification}
                  </li>
                ))}
              </ul>
              <p className="font-bold text-lg">Ratings:</p>
              <div className="flex items-center gap-3">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <button className="btn btn-sm rounded-full font-bold text-[#309C08] border-[#309C08] px-3">
                  {singleProduct.rating}
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleAddToCart(singleProduct)}
                  className="btn bg-[#9538E2] text-white rounded-full font-bold"
                >
                  Add To Cart<i class="ri-shopping-cart-2-line"></i>
                </button>
                <button
                  onClick={() => handleAddToWishlist(singleProduct)}
                  className="btn btn-md text-xl rounded-[180px] bg-white border border-black border-1"
                >
                  <i class="ri-heart-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
