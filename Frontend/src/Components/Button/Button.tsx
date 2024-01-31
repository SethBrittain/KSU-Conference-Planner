import * as React from 'react';
import { Button } from '@mui/material'

export const MuiButton = () => {
    return (
      <div>
        <Button variant="contained" color="secondary">Sign Up</Button>
        <Button variant="contained" color="success">Submit</Button>
        <Button variant="contained" color="warning">Delete</Button>
      </div>
    );
}