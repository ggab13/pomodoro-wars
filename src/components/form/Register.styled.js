import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1rem;
    width: 300px;
    background-color: ${(props) => props.theme.mainColorLight};
    text-align: start;
    color: ${(props) => props.theme.mainColor};

    Ł label {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    input {
        font-family: 'Carter One', cursive;
        font-size: 1rem;
        width: 100%;
        height: 2rem;
        outline: none;
        border-radius: 5px;
        &:focus {
            border-width: 3px;
            border-color: ${(props) => props.theme.secondaryColor};
        }
    }
`;

export const ValidUsernameStyled = styled.span`
    display: ${(props) => (props.validName ? 'inline' : 'none')};
    min-width: 20px;
    color: #2db83d;
    white-space: nowrap;
`;
export const InvalidUsernameStyled = styled.span`
    display: ${(props) => (props.validName || !props.user ? 'none' : 'inline')};
    min-width: 20px;
    color: red;
    white-space: nowrap;
`;

export const UserErrorInfoStyled = styled.p`
    display: ${(props) =>
        props.userFocus && props.user && !props.validName ? 'block' : 'none'};
    background-color: black;
    width: 90%;
    margin: 5px auto;
    color: white;
    font-size: 1rem;
    padding: 2px;
    font-size: 0.8rem;
    border-radius: 5px;
    text-align: start;
`;
