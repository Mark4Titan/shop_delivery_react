import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  width: 100vw;
  height: 70px;
  background-color: #bbbaba;
  display: grid;
  grid-template: 1fr /1fr 0.3fr;
  padding: 0 20px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  font-size: 17px;
  border: solid 1px;
  box-shadow: 0px 12px 20px 1px rgba(0, 0, 0, 0.1);
`;
export const ContSection = styled.section`
  padding-top: 100px;
  display: grid;

  grid-template: 1fr / minmax(10px, 1fr) minmax(auto, 1320px) minmax(10px, 1fr);
`;
export const Basket = styled.div`
cursor: pointer;
  border: solid 1px;
  width: 100px;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 10px;
  &:hover {
    box-shadow: 0px 12px 20px 1px rgba(0, 0, 0, 0.1);
  }
`;
