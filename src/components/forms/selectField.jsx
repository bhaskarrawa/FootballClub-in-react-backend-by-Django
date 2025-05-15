import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({ label, options, name, value, onChange, onBlur }) {
    const [age, setAge] = React.useState('');

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={options.find(option => option.id === MenuItem.value)?.name}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                {options.map((option) => (
                    <MenuItem value={option.id}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
