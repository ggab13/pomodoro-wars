import styled from 'styled-components';
export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0px 3rem;
`;

export const TomatoSvgStyled = styled.div`
    white-space: nowrap;
    svg {
        width: 2.5rem;
        margin-left: 5px;
        padding: 0px 0px;
        height: auto;
        justify-content: flex-end;
    }
`;
export const H1Styled = styled.h1`
    color: ${(props) => props.theme.mainColor};
    white-space: nowrap;
    font-size: 3rem;
    margin-right: auto;
`;
