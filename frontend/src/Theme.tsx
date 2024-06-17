  import { PaletteOptions, ThemeProvider, createTheme } from "@mui/material";

  const palette: PaletteOptions = {
    primary: {
      light: "#a770c1",
      main: "#9554b3",
      dark: "#843da5",
    },
    secondary: {
      light: "#80c35d",
      main: "#72b354",
      dark: "#5f9f49",
    },
    background: {
      default: "white",
      paper: "white",
    },
  };

  const theme = createTheme({
    palette,
  });

  export function AppTheme({ children }: React.PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
