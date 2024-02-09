import * as React from 'react';
import { Box, Stack } from '@mui/material'

export const MuiLayout = () => {
    return (
        <Stack sx={{ border: '1px solid' }}>
            <Box 
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    height: '100px',
                    padding: '16px',
                    '&:hover': {
                       backgroundColor: 'primary.light'
                    },
                }}
            >
                Codevolution
            </Box>
            <Box
            ></Box>

        </Stack>

    );
}