import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllProducts2 = () => {
  const allProducts = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {allProducts.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts2;
