import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionField({ label, rowNo, name, value, onChange, onBlur, error, helperText }) {
    return (
        <TextField sx={{ width: '100%' }}
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={rowNo}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
        />
    );
}
