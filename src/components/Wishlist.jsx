import { useState } from "react";
import { addToWishlist, getWishlist, removeFromWishlist } from "../utils";
import WishlistSingleProduct from "./WishlistSingleProduct";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useState(() => {
    const wishlistProducts = getWishlist();
    setWishlist(wishlistProducts);
  }, []);

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
    const remaining = getWishlist();
    setWishlist(remaining);
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="font-bold text-2xl text-center md:text-left">WishList</h1>
      </div>

      <div className="container mx-auto px-2 md:px-0 md:py-5 min-h-screen flex flex-col gap-5">
        {wishlist.map((product) => (
          <WishlistSingleProduct key={product.product_id} handleRemoveFromWishlist={handleRemoveFromWishlist} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
