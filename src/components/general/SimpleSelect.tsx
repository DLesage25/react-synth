import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

interface PropsInterface {
    title?: string;
    imageSrc?: string;
    handleChange: any;
    value: number | string;
    items: { name: string; value: number | string }[];
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '100%',
    },
    select: {
        color: 'white',
        borderColor: 'red',
    },
    menuItem: {
        '&:hover': {
            backgroundColor: '#cccccc',
        },
    },
}));

const SimpleSelect = ({
    title,
    value,
    handleChange,
    items,
}: PropsInterface) => {
    const classes = useStyles();

    return (
        <div style={{ marginLeft: '14px', marginRight: '14px' }}>
            <FormControl className={classes.formControl}>
                <InputLabel id="simple-select">
                    <Typography color="primary">{title}</Typography>
                </InputLabel>
                <Select
                    id="simple-select"
                    value={value}
                    onChange={handleChange}
                    variant="standard"
                    className={classes.select}
                >
                    {items.map((item: any) => (
                        <MenuItem
                            className={classes.menuItem}
                            value={item.value}
                            key={`select-${item.value}`}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SimpleSelect;
