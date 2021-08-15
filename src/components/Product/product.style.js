import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  width: 100%;
  z-index: 1;
`;

export const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.div`
  margin-top: 5px;
`;

export const Productrating = styled.div``;

export const RatingStar = styled(StarIcon)`
  color: #ffff00;
`;

export const ProductImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const AddButton = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  &:focus {
    outline: none;
  }
`;
