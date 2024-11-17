

const CartSingleProduct = ({ product ,handleRemoveFromCart}) => {

   
  return (
    <div className="flex gap-5 justify-between border rounded-lg bg-gray-100 p-5 shadow-xl">
      <div className="flex gap-3 items-center">
        <img
          className="w-[140px] md:w-[100px] rounded-md"
          src={product.product_image}
          alt=""
        />
        <div>
          <p className="font-bold text-lg">{product.product_title}</p>
          <p className="text-xs md:text-sm">{product.description}</p>
          <p className="font-bold">Price : {product.price} $</p>
        </div>
      </div>

      <div >
        <i onClick={()=>handleRemoveFromCart(product)} class="ri-close-circle-line text-red-900 text-2xl"></i>
      </div>
    </div>
  );
};

export default CartSingleProduct;
