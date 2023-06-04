import styled from '@emotion/styled'

export const ContentUl = styled.ul` 
    grid-column: 2/3;
    width: 100%;
    display: grid ;
    grid-template: 1fr / repeat(auto-fill, 300px);
    grid-gap: 40px;
    // background-color: red; 
    `;
export const ContentLi = styled.li` 
    cursor: pointer;
    display: flex;
    max-width: 400px;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #a4a4a4;
    flex-direction: column;
    justify-content: space-between;
    &:hover{
        border: solid 1px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
`;