import toast from "react-hot-toast";

let priceTotal = 0;

const getProducts = () => {
  const addedProduct = JSON.parse(localStorage.getItem("cart"));
  if (addedProduct) {
    return addedProduct;
  } else {
    return [];
  }
};

const getWishlist = () => {
  const addedProduct = JSON.parse(localStorage.getItem("wishlist"));
  if (addedProduct) {
    return addedProduct;
  } else {
    return [];
  }
};

const getCartTotal = (price) => {
  priceTotal+=price
  return priceTotal
}


const addToCart = (product) => {
  const addedProduct = getProducts();
 


  const exist = addedProduct.find((p) => p.product_id === product.product_id);
  if (exist) {
    toast.error("Product already added");
    return;
  }
  addedProduct.push(product);
  localStorage.setItem("cart", JSON.stringify(addedProduct));
  toast.success("Product added to cart successfully");
};

const addToWishlist = (product) => {
  const addedProduct = getWishlist();
  const exist = addedProduct.find((p) => p.product_id === product.product_id);
  if (exist) {
    toast.error("Product already added");
    return;
  }
  addedProduct.push(product);
  localStorage.setItem("wishlist", JSON.stringify(addedProduct));
  toast.success("Product added to wishlist successfully");
};


const removeFromCart = (product) => {
  const addedProduct = getProducts();
  const remaining = addedProduct.filter(
    (p) => p.product_id !== product.product_id
  );
  localStorage.setItem("cart", JSON.stringify(remaining));
};
const removeFromWishlist = (product) => {
  const addedProduct = getWishlist();
  const remaining = addedProduct.filter(
    (p) => p.product_id !== product.product_id
  );
  localStorage.setItem("wishlist", JSON.stringify(remaining));
};

export {
  addToCart,
  addToWishlist,
  getProducts,
  getWishlist,
  removeFromCart,
  removeFromWishlist,
  getCartTotal
};
