import styled from "@emotion/styled";

export const BasketBox = styled.div`
  opacity: ${(P) => (P.basket ? 1 : 0)};
  position: fixed;

  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 1fr/1fr;
  align-items: center;
  justify-items: center;

  backdrop-filter: blur(12.2px);
  -webkit-backdrop-filter: blur(12.2px);
`;
export const BasketContent = styled.div`
  border: solid 1px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr 1fr 1fr / minmax(300px, 1fr);
  justify-items: center;
  align-items: center;
`;
