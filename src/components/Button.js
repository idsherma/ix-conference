import styled from "styled-components";

export const Button = styled.button`
button {
    background: transparent;
    border-color: var(--dark-red);
    &:hover {
        background: var(--dark-tomato);
        border-color: var(--dark-red);
    }
    &:focus {
        background: var(--tomato);
        border-color: var(--tomato);
    }
}
`;