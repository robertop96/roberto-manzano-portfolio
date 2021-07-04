import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onclick={() => setOpen((prev) => !prev)}>
      <a href="/">About</a>
      <a href="/">Project</a>
      <a href="/">Contact Me</a>
    </StyledMenu>
  );
};

export default Menu;
