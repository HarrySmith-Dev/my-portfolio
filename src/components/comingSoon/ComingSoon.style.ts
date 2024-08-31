import styled from "styled-components";

export const ComingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const ComingSoonIcon = styled.img`
    width: 100px;
    height: 100px;

    @media (min-width: 768px){
        width: 200x;
        height: 200px;
    }
`;

export const ComingSoonTitle = styled.h1`
    font-family: Jost, sans-serif;
    font-size: 25px;
    line-height: normal;
    letter-spacing: 0;
    margin: 0;

    @media (min-width:768px){
        font-size: 50px;
    }
`;