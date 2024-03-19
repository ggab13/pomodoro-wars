import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    font-size: larger;
    color: white;
    padding: 5px;
`;

export const Input = styled.input`
    font-size: larger;
    padding: 5px;
    margin: 2px;
`;

export const Button = styled.button`
    color: white;
    background-color: red;
    border-radius: 5px;
    font-size: larger;
    display: block;
    padding: 5px;
    margin: 10px auto;
`;
export const Messages = styled.div`
    display: flex;
    justify-content: center;
`;

export const Error = styled.div`
    display: block;
    background-color: red;
    color: white;
    width: fit-content;
    height: 50px;
    padding: 5px;
`;

export const Success = styled.div`
    display: block;
    background-color: green;
    color: black;
    width: fit-content;
    height: 70px;
    padding: 5px;
`;
