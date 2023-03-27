import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function MyAppBar() {

  return (
    <AppBar position="static" data-testid="appbar">
      <Toolbar justifyContent= "space-between">
        <Typography variant="h7">HOME</Typography>
      
   <Button color="inherit" data-testid="btn" position="static"  sx={{ marginLeft: "auto" }}>Login</Button>

      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;