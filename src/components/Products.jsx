import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Smartphone", price: 699.99 },
    { id: 2, name: "Laptop", price: 999.99 },
    { id: 3, name: "Tablet", price: 349.99 },
    { id: 4, name: "Headphones", price: 89.99 },
    { id: 5, name: "Smartwatch", price: 199.99 },
    { id: 6, name: "Bluetooth Speaker", price: 59.99 },
    { id: 7, name: "Camera", price: 499.99 },
    { id: 8, name: "Smart TV", price: 1199.99 },
    { id: 9, name: "Gaming Console", price: 299.99 },
    { id: 10, name: "Electric Kettle", price: 29.99 },
    { id: 11, name: "Microwave Oven", price: 139.99 },
    { id: 12, name: "Refrigerator", price: 799.99 },
    { id: 13, name: "Washing Machine", price: 499.99 },
    { id: 14, name: "Air Conditioner", price: 349.99 },
    { id: 15, name: "Vacuum Cleaner", price: 149.99 },
    { id: 16, name: "Blender", price: 89.99 },
    { id: 17, name: "Toaster", price: 39.99 },
    { id: 18, name: "Coffee Maker", price: 79.99 },
    { id: 19, name: "Hair Dryer", price: 29.99 },
    { id: 20, name: "Electric Toothbrush", price: 59.99 }
  ];

  useEffect(() => {
    const productId = parseInt(userId);
    const product = products.find(product => product.id === productId);
    if (product) {
      setSelectedProduct(product);
    } else {
      navigate('../NoMatch');
    }
  }, [userId, navigate, products]);

  return (
    <div className="container">
      <div className="title">
        <h1>Selected Product is {selectedProduct ? selectedProduct.name : "Not Found"}</h1>
      </div>
      <button className="btn" onClick={() => navigate(`../place-order?id=${userId}`)}>
        Place Order
      </button>
      <br />
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Products;
