import { React, useEffect, useState } from "react";
import "./App.css";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Product from "./services/components/product";

const App = () => {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      {products.map((products) => {
        return (
          <Product
            id={products.id}
            image={products.images}
            description={products.description}
            name={products.name}
            prices={products.prices[0].unit_amount}
            genre={products.metadata["Genre "]}
          />
        );
      })}
    </div>
  );
};

export default App;
