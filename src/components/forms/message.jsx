import * as React from 'react';
import { Box, Typography } from '@mui/material'

export default function Message({ messagetext, messagecolor }) {
    return (
        <Box sx={{
            width: '100%',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: messagecolor,
            padding: '10px',
            marginBottom: '20px',
            color: 'white'
        }}>
            <Typography>
                {messagetext}
            </Typography>
        </Box>
    );
}