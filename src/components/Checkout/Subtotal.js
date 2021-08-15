import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";
import {
  ProceedToCheckout,
  SubtotalContainer,
  SubtotalGift,
} from "./checkout.style";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <SubtotalContainer>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox" /> This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <ProceedToCheckout>Proceed to checkout</ProceedToCheckout>
    </SubtotalContainer>
  );
};

export default Subtotal;
