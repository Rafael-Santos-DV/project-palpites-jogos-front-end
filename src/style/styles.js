import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 900px;

`;

export const Box = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    
`;