import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC } from "react";

type AppThemeProviderProps = {
  children: JSX.Element;
};

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#12243C",
      },
      secondary: {
        main: "#2f9562",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
