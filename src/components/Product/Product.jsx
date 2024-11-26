import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Proce: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/Products/${product_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
