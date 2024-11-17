import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.product_id}`}>
      <div className=" bg-base-100 md:h-[460px] shadow-xl card">
        <figure className="md:p-12">
          <img
            src={product.product_image}
            alt="Shoes"
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.product_title}</h2>
          <p className="font-semibold text-gray-500">Price :{product.price}$</p>
          <div className="card-actions ">
            <button className="btn btn-md ">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
