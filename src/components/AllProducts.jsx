import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const { categoryName } = useParams();
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (categoryName === "All Products") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === categoryName
      );
      setProducts(filtered);
    }
  }, [categoryName, allProducts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.product_id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center text-4xl font-bold text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
};

export default AllProducts;
