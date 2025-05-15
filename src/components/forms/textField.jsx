import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm({ label, name, value, onChange, onBlur, error, helperText }) {
    return (
        <TextField id="outlined-basic"
            label={label}
            variant="outlined"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            sx={{ width: '100%' }}
            error={error}
            helperText={helperText}
        />
    );
}
