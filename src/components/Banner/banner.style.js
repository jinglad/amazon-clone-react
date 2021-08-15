import styled from "styled-components";

export const BannerContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const BannerImage = styled.img`
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: -1;
  margin-bottom: -150px; ;
`;
