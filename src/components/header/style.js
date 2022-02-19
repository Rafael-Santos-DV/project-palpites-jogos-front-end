import styled from "styled-components";

export const ContainerHeader = styled.div`
    grid-column: 1 / span 3;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;

    > h1 {
        color: #ffffff;
        font-size: 35px;
        font-weight: 700;
        letter-spacing: 2px;
    }
`;

export const BoxNavigation = styled.nav`
    display: flex;
    justify-content: center;
    
`;

export const OpUl = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 50px;

    > a {
        color: #000000;
    }

    & li {
        padding: 10px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
        transition: 200ms;
        background-color: rgb(193, 182, 250);
        color: #ffffff;
        position: relative;
        display: flex;
        align-items: center;
       

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            display: block;
            box-shadow: inset 0px 0px 40px rgba(0, 0, 0, .1);
            border-radius: 10px;
            animation: animateRight 2s infinite;
           
        }
        &::after{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            display: block;
            box-shadow: inset 0px 0px 40px rgba(0, 0, 0, .1);
            border-radius: 15px;
            animation: animateLeft 2s infinite;
        }

        @keyframes animateRight {
            0% {
                width: 0;
            }
            50% {
                width: 50%;
            }
        }
        @keyframes animateLeft {
            100% {
                width: 50%;
            }
            50% {
                width: 0%;
            }
        }
    }
`;