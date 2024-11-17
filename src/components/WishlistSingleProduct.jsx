const WishlistSingleProduct = ({ product, handleRemoveFromWishlist }) => {
  return (
    <div className="flex gap-5 justify-between border rounded-lg bg-gray-100 p-5 shadow-xl">
      <div className="flex gap-3 items-center">
        <img
          className="w-[50%] md:w-[150px] rounded-md"
          src={product.product_image}
          alt=""
        />
        <div className="space-y-2 w-[50%]">
          <p className="font-bold text-lg">{product.product_title}</p>
          <p className="text-xs md:text-sm">{product.description}</p>
          <p className="font-bold">Price : {product.price} $</p>
          <button className="btn btn-md rounded-full bg-[#9538E2] text-white">Add To Cart</button>
        </div>
      </div>

      <div>
        <i
          onClick={() => handleRemoveFromWishlist(product)}
          class="ri-close-circle-line text-red-900 text-2xl"
        ></i>
      </div>
    </div>
  );
};

export default WishlistSingleProduct;
