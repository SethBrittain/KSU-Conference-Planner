import * as React from 'react';
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * We're creating a color palette to apply on the buttons
 */
const theme = createTheme({
    palette: {

        primary:{
            main : '#512888'
        },
        warning: {
          main : '#C62828'
        }
        
    } 
})


/**
 * A component that has 3 buttons with different colors. (*FOR TESTING PURPOSES*)
 */
export const MuiButton = () => {
    return (
      <ThemeProvider theme={theme}> {/* ThemeProvider to apply the custom theme we made */}
      <div>
        <Button variant="contained" color="primary">Sign Up</Button>
        <Button variant="contained" color="success">Submit</Button>
        <Button variant="contained" color="warning">Delete</Button>
      </div>
      </ThemeProvider>
    );
    
}

/**
 * The sign up button with icon in it. Uses "primary" color from theme
 */
export const MuiSignUpButton = () => {
  return (
    
    <ThemeProvider theme={theme}>      
      <Button variant="contained" color="primary" endIcon={<OpenInNewIcon/>}>Sign Up</Button>
    </ThemeProvider>
  );

  
}

/**
 * The sign in button with icon in it. Uses "primary" color from theme
 */
export const MuiSignInButton = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" endIcon={<OpenInNewIcon/>}>Sign In</Button>
    </ThemeProvider>
  );

  
}