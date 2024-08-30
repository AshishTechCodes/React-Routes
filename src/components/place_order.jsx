import React from "react";
import { useSearchParams } from "react-router-dom";
const PlaceOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific query parameter
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  return <div>
    <p>Product ID: {id || "Not Provided"}</p>
    <p>Product Name: {name || "Not Provided"}</p>
    <p>Product Price: ₹{price || "Not Provided"}</p>
  </div>;
};

export default PlaceOrder;
