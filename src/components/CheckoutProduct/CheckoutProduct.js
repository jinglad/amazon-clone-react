import { useStateValue } from "../Context/StateProvider";
import { RatingStar } from "../Product/product.style";
import {
  CheckoutProductContainer,
  CheckoutProductImage,
  CheckoutProductInfo,
  CheckoutProductPrice,
  CheckoutProductRating,
  CheckoutProductTitle,
  RemoveButton,
} from "./checkoutProduct.style";

const CheckoutProduct = (props) => {
  const { id, title, image, price, rating } = props;

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <CheckoutProductContainer>
      <CheckoutProductImage src={image} alt="Product Image" />
      <CheckoutProductInfo>
        <CheckoutProductTitle>{title}</CheckoutProductTitle>
        <CheckoutProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutProductPrice>
        <CheckoutProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <RatingStar />
            ))}
        </CheckoutProductRating>
        <RemoveButton onClick={removeFromBasket}>
          Remove from basket
        </RemoveButton>
      </CheckoutProductInfo>
    </CheckoutProductContainer>
  );
};

export default CheckoutProduct;
