import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: white;
  width: 100%;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    height: auto;
    justify-content: flex-end;
  }

  a {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (min-width: ${({ theme }) => theme.tablet}) {
      letter-spacing: 0;
      margin: 0rem 2rem;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
