import styled from "@emotion/styled";

export const BasketBox = styled.div`
  opacity: ${(P) => (P.basket ? 1 : 0)};
  position: fixed;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 1fr/1fr;
  align-items: center;
  justify-items: center;
  backdrop-filter: blur(12.2px);
  -webkit-backdrop-filter: blur(12.2px);
`;

export const BasketContent = styled.ul`
width: 245px;
  padding: 10px;
  margin-top: 110px;
  margin-bottom: 150px;
  display: grid;
  grid-gap: 40px;
  grid-template: 1fr / minmax(250px, 1fr);
  justify-items: center;
  align-items: center;
`;
export const BasketContentLi = styled.li`
  border: solid 1px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr / 1fr;
  justify-items: center;
  align-items: center;
  background-color: antiquewhite;
`;
export const BasketContentcard = styled.div`
  border: solid 1px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr / 1fr;
  justify-items: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const BasketInputBox = styled.div`
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr / 1fr 1fr;
  justify-items: center;
  align-items: center;
`;
export const BasketInput = styled.input`
  font-size: 17px;
  padding: 5px;
`;
