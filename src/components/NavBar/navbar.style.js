import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

// export const StickyHeader = styled.div`
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

export const NavbarContainer = styled.nav`
  background-color: #131921;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  /* object-fit: contain; */
  width: 100px;
  margin: 0 20px;
  margin-top: 18px;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 22px;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const CustomSearchIcon = styled(SearchIcon)`
  background-color: #cd9042;
  padding: 5px;
  height: 22px !important;
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderLink = styled(Link)`
  color: white !important;
  text-decoration: none !important;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

export const NavRightLineOne = styled.span`
  font-size: 10px;
`;

export const NavRightLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

export const HeaderBasket = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketCount = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
