import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { getProducts, removeFromCart } from "../utils";
import CartSingleProduct from "./CartSingleProduct";
import groupImage from "../assets/group.png";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tempTotalPrice, setTempTotalPrice] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const cartProduct = getProducts();
    setCartProduct(cartProduct);
    calculateTotalPrice(cartProduct);
  }, []);

  const calculateTotalPrice = (products) => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(total);
  };

  const handleSortBtn = () => {
    const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
    setCartProduct(sortedProducts);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    const remaining = getProducts();
    setCartProduct(remaining);
    calculateTotalPrice(remaining);
  };

  const handlePurchase = () => {
    setTempTotalPrice(totalPrice);

    document.getElementById("my_modal_5").showModal();

    setCartProduct([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");

    setTimeout(() => {
      document.getElementById("my_modal_5").close();
      navigate("/");
    }, 2000); 
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between py-6">
        <h1 className="text-3xl font-bold">Cart : {cartProduct.length}</h1>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <p className="font-bold text-2xl">Total Price : ${totalPrice}</p>
          <button
            onClick={handleSortBtn}
            className="text-[#9538E2] border border-[#9538E2] btn rounded-full"
          >
            Sort By Price <i className="ri-sort-number-asc"></i>
          </button>
          <button
            onClick={handlePurchase}
            className="btn rounded-full bg-[#9538E2] text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 min-h-screen p-4 md:p-0 py-5">
        {cartProduct.map((product) => (
          <CartSingleProduct
            handleRemoveFromCart={handleRemoveFromCart}
            key={product.product_id}
            product={product}
          />
        ))}
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center">
          <img src={groupImage} alt="Payment Success" className="w-[80px]" />
          <h3 className="font-bold text-2xl">Payment Successful</h3>
          <p className="py-4 font-semibold text-gray-500">
            Thanks for purchasing.
          </p>
          <p className="font-semibold text-gray-500">
            Total: ${tempTotalPrice}
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                document.getElementById("my_modal_5").close();
                navigate("/"); 
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
