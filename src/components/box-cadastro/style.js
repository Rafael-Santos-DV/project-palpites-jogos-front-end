import styled from "styled-components";

export const ContainerCadastro = styled.div`
    grid-column: 1 / span 3;
    
    @media only screen and (max-width: 768px) {
        grid-column: 1 / span 2;
    }
    @media only screen and (max-width: 468px){
        grid-column: 1 / span 1;
    }
    > form {
        margin: 0 auto;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
        border-radius: 10px;
        padding: 20px;
        gap: 10px;

        > div {
            width: 100%;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
            border-radius: 10px;
            padding: 10px;
            display: flex;
            align-items: center;
            gap: 30px;
            > span {
                font-size: 40px;
                color: #ffffff;
            }
        }

        > input {
            color: #000000;
            padding: 10px 14px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            transition: background 200ms, color 200ms;
            letter-spacing: 1px;

            &:hover {
                background-color: rgb(193, 182, 250);
                color: #ffffff;
            }
        }
    }

   
`;

export const BoxTimesInput = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;

    > img {
        width: 100%;
        max-width: 60px;
    }

    > input {
        max-width: 40px;
        height: 40px;
        border-radius: 10px;
        padding: 10px;
        font-size: 25px;
        cursor: pointer;
        
    }
`;

export const BoxName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
    border-radius: 10px;
    padding: 10px;

    > input {
        border: none;
        padding: 10px;
        border-radius: 10px;
       
    }
    > .icon {
        font-size: 30px;
        color: #ffffff;
    }
`;