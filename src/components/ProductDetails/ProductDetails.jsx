import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { product_id: selectedid } = useParams();
  const id = parseInt(selectedid);
  const data = useLoaderData();
  const product = data.find((product) => parseInt(product.product_id) === id);
  console.log(product, data.product_id);
  const {
    product_id: currentId,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  return <div></div>;
};

export default ProductDetails;
