import styled from "styled-components";

export const CheckoutProductContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 15px;
  background-color: white;
  width: 70%;
  margin-left: 15px;
`;

export const CheckoutProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

export const CheckoutProductInfo = styled.div`
  padding-left: 20px;
`;

export const CheckoutProductTitle = styled.p`
  font-size: 17px;
  font-weight: 700;
`;

export const CheckoutProductPrice = styled.p``;

export const CheckoutProductRating = styled.div``;

export const RemoveButton = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  padding: 5px;
  margin-top: 60px;
  &:focus {
    outline: none;
  }
`;
