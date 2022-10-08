import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { SWRConfig } from "swr";
import lightTheme from "themes/lightTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(`https://jsonplaceholder.typicode.com/${resource}`, init).then(
            (res) => res.json()
          ),
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
