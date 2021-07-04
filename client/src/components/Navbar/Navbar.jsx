import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../..//global/hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global/global';
import { theme } from '../../global/theme';
import { Burger, Menu } from '../index';

function App() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <article ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </article>
      </>
    </ThemeProvider>
  );
}
export default App;
