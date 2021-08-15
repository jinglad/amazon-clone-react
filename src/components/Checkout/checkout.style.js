import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  /* background-color: white; */
  height: max-content;
`;

export const CheckoutLeft = styled.div``;

export const CheckoutRight = styled.div``;

export const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const CheckoutHeading = styled.h2`
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const CheckoutText = styled.p`
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  margin-left: 20px;
`;

export const SubtotalGift = styled.small`
  display: flex;
  align-items: center;
  & input {
    margin-right: 5px;
  }
`;

export const ProceedToCheckout = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  &:focus {
    outline: none;
  }
`;
