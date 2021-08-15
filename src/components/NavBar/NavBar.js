import { Link } from "react-router-dom";
import {
  BasketCount,
  CustomSearchIcon,
  HeaderBasket,
  HeaderLink,
  HeaderOption,
  Input,
  Logo,
  NavbarContainer,
  NavRight,
  NavRightLineOne,
  NavRightLineTwo,
  SearchBox,
} from "./navbar.style";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "../../firebase.config";

const NavBar = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(user);

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <NavbarContainer>
      <Link to="/">
        <Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <SearchBox>
        <Input type="text" />
        <CustomSearchIcon />
      </SearchBox>

      <NavRight>
        <HeaderLink to={!user && "/login"}>
          <HeaderOption onClick={handleSignOut}>
            <NavRightLineOne>Hello</NavRightLineOne>
            <NavRightLineTwo>{user ? "Sign Out" : "Sign In"}</NavRightLineTwo>
          </HeaderOption>
        </HeaderLink>

        <HeaderLink to="/">
          <HeaderOption>
            <NavRightLineOne>Returns</NavRightLineOne>
            <NavRightLineTwo>& Orders</NavRightLineTwo>
          </HeaderOption>
        </HeaderLink>

        <HeaderLink to="/">
          <HeaderOption>
            <NavRightLineOne>Your</NavRightLineOne>
            <NavRightLineTwo>Prime</NavRightLineTwo>
          </HeaderOption>
        </HeaderLink>

        <HeaderLink to="/checkout">
          <HeaderBasket>
            <ShoppingBasketIcon />
            <NavRightLineTwo>
              <BasketCount>{basket?.length}</BasketCount>
            </NavRightLineTwo>
          </HeaderBasket>
        </HeaderLink>
      </NavRight>
    </NavbarContainer>
  );
};

export default NavBar;
