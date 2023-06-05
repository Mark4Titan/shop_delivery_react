import styled from "@emotion/styled";

export const DivWraperNotif = styled.div`
  position: fixed;
  top: 80px;
  margin: 20px;
  background-color: antiquewhite;
  width: 300px;
  min-height: 300px;
  border: solid 1px #a4a4a4;
  border-radius: 5px;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 9px 20px 3px #a4a4a4;

  animation: fadeInOut 1s ease-in-out forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const ContentNotif = styled.div`
  display: grid;
  height: 100%;
  grid-template: 1fr 1fr 1fr/1fr;
  justify-items: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
`;
export const TextNotif = styled.div`
  grid-row: 1/3;
  width: 100%;
  display: grid;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const ButtonNotif = styled.button`
  grid-row: 3/4;
  width: 140px;
  height: 35px;
  display: grid;
  padding: 5px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  color: dimgrey;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: solid 1px #d6d6d6;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: beige;
    box-shadow: 0px 3px 5px 0px #f2afaf4f;
  }
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`;
