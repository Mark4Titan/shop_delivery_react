import styled from "@emotion/styled";

export const FindOrderUl = styled.ul`
  grid-column: 2/3;
  display: grid;
  padding: 10px;
  justify-items: center;
  grid-template: auto / auto;
  grid-gap: 40px;
`;
export const FindOrderLi = styled.li`
  cursor: pointer;
  display: flex;
  padding: 20px;
  width: 245px;
  border-radius: 5px;
  border: solid 1px #a4a4a4;
  flex-direction: column;
  justify-content: space-between;
  background-color: antiquewhite;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  &:hover {
    border: solid 1px;
    box-shadow: 0px 9px 20px 3px #a4a4a4;
  }
`;
export const BoxDetails = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #a4a4a4;
`;
export const BoxImg = styled.div`
  padding: 10px;
  width: 200px;
  margin-bottom: 40px;
  margin-top: 5px;
`;
export const TitleH3 = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
export const TitleH4 = styled.h4`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
export const OrderMain = styled.div`
  padding: 10px;
`;

