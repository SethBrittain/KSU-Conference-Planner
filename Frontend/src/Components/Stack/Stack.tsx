import * as React from 'react';
import { Box, Stack } from '@mui/material'

type StackProps = {
    border: string;
    backgroundColor: string;
    color: string;
    text: string;
}

export const MuiLayout = ({border, backgroundColor, color, text}: StackProps) => {
    return (
        <Stack sx={{ border: border }}>
            <Box 
                sx={{
                    backgroundColor: backgroundColor,
                    color: color,
                    height: '100px',
                    padding: '16px',
                    '&:hover': {
                       backgroundColor: 'primary.light'
                    },
                }}
            >
                {text}
            </Box>
            <Box
            ></Box>

        </Stack>

    );
}