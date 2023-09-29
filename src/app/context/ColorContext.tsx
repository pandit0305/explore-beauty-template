import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function ToggleColorMode({
  children,
}: {
  children: React.ReactNode
}) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
    return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
    );
  }
  
  export default ToggleColorMode;