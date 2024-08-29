import React from "react";
import { useSearchParams } from "react-router-dom";
const PlaceOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific query parameter
  const myParam = searchParams.get("id");
  return <div>{myParam}</div>;
};

export default PlaceOrder;
