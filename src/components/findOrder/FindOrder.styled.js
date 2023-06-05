import styled from "@emotion/styled";

export const FindOrderUl = styled.ul`
  grid-column: 2/3;
  display: grid;
  padding: 10px;
  justify-items: center;
  grid-template: 200px / minmax(300px, 1fr);
  grid-gap: 40px;
`;
export const FindOrderLi = styled.li`  
  display: flex;
  padding: 20px;
  border-radius: 5px;
  border: solid 1px #a4a4a4;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  &:hover {
    border: solid 1px;
  }

`;
