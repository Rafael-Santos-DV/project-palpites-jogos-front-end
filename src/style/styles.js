import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;

`;

export const Box = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding: 20px;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 468px) {
        grid-template-columns: 1fr;
    }
`;