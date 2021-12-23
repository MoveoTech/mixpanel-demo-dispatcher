import styled from "styled-components";

export const Btn = styled.button`
    height: 36px;
    width: 226px;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    color: white;
    background: #3379C7;
    cursor: pointer;
    border: none;

    &:hover,
    &:active {
        background: #3379C7;
    }
`;
export const Icon = styled.img`
    fill: white;
    border: 1.5px solid #FFFFFF;
    transform: rotateY(180deg);
`