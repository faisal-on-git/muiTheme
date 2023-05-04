// import * as React from 'react';
// import { useState } from "react";
// import * as ReactDOM from 'react-dom/client';
// import { StyledEngineProvider } from '@mui/material/styles';
// import ThemeProvider from '@mui/material'
// import Demo from './demo';
// import Topbar from './TopBar';
// import { ColorModeContext, useMode } from "./theme";

// ReactDOM.createRoot(document.querySelector("#root")).render(
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   <React.StrictMode>
//   {/* const [theme, colorMode] = useMode() */}

  
//   <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//     <StyledEngineProvider injectFirst>
      
//       <Topbar/>
     
//     </StyledEngineProvider>
//     </ThemeProvider>
//     </ColorModeContext.Provider>

//   </React.StrictMode>
// );


import * as React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from './TopBar';
import { ColorModeContext, useMode } from "./theme";
import Demo from './demo';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
          {/* <StyledEngineProvider injectFirst> */}
            <Topbar />
        
          {/* </StyledEngineProvider> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
