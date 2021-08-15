import { useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import {
  AddButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  Productrating,
  RatingStar,
} from "./product.style";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = (props) => {
  const { id, title, price, image } = props;
  const [{ basket }, dispatch] = useStateValue();

  const randomNumber =
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;
  const [rating] = useState(randomNumber);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <Productrating>
          {Array(rating)
            .fill()
            .map((_) => (
              <RatingStar />
            ))}
        </Productrating>
      </ProductInfo>
      <ProductImage src={image} />
      <AddButton onClick={addToBasket}>Add to Basket</AddButton>
    </ProductContainer>
  );
};

export default Product;
