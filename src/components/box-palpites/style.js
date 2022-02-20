import styled from "styled-components";

export const BoxTimes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    background-color: rgb(193, 182, 250);

`;

export const ContainerRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, .7);
    
   
`;

export const BoxRowOne = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 5px 0px;
    background-color: rgba(255, 255, 255, .7);
   

    > strong {
        font-size: clamp(1.5vw, 12px, 15px);
        
    }
    > .icon {
        font-size: clamp(2vw, 20px, 30px);
    }
  
`;

export const BoxOne = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-weight: 700;
   
    > span {
        font-size: 20px;
    }
    > img {
        width: 100%;
        max-width: 40px;
        height: auto;
    }
`;

export const BoxData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    padding: 0 5px;
    font-size: clamp(1.5vw, 12px, 15px);
    color: #ffffff;
`;