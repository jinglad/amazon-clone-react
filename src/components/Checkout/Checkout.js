import {
  CheckoutAd,
  CheckoutContainer,
  CheckoutHeading,
  CheckoutLeft,
  CheckoutRight,
  CheckoutText,
} from "./checkout.style";
import { useStateValue } from "../Context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <CheckoutAd
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad Image"
        />
        {basket?.length === 0 ? (
          <div>
            <CheckoutHeading>Your shopping basket is empty</CheckoutHeading>
            <CheckoutText>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item
            </CheckoutText>
          </div>
        ) : (
          <div>
            <CheckoutHeading>Your Shopping Basket</CheckoutHeading>
            {basket.map((product) => (
              <CheckoutProduct
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </CheckoutContainer>
  );
};

export default Checkout;
