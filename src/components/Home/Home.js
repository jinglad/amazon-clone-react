import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [firstfour, setFirstFour] = useState([]);
  const [secondTwo, setSecondTwo] = useState([]);
  const [thirdOne, setThirdOne] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setSecondTwo(data.slice(4, 5));
        setFirstFour(data.slice(0, 4));
        setThirdOne(data.slice(5, 10));
      });
  }, []);

  // console.log(firstfour);

  // console.log(allProducts);

  return (
    <>
      <NavBar />
      <Banner />
      <AllProducts>
        {allProducts.length > 0 &&
          firstfour.map((product, i) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </AllProducts>
      <AllProducts>
        {allProducts.length > 0 &&
          secondTwo.map((product, i) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </AllProducts>
      <AllProducts>
        {allProducts.length > 0 &&
          thirdOne.map((product, i) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </AllProducts>
    </>
  );
};

export default Home;

const AllProducts = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
