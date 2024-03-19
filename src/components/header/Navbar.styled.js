import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  margin-top: 2rem;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    justify-content: center;
    align-items: center;

    li {
      padding-right: 1rem;
      display: flex;
      align-items: center;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonStyled = styled.button`
  font-size: 1.5rem;
  height: 4rem;
  width: 8rem;
  font-family: 'Carter One', cursive;
  color: white;
  background-color: #2db83d;
  border-style: none;
  padding: 0.5rem;
  border-radius: 5px;
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.secondaryColor};
  }
`;
