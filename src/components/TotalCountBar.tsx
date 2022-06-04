import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

import { useWordCounterList } from "../state/counterState";
import { useCallback } from 'react';

const typeOfCounter = [
    {
        value: 'Words',
        label: 'Words',
    },
    {
        value: 'Characters',
        label: 'Characters',
    },
    {
        value: 'Characters including space',
        label: 'Characters including space',
    },
];


type Props = {
    // onActive: boolean;
}


const TotalCountBar: React.FC<Props> = () => {

    const { addCounterBelow, refreshCounters } = useWordCounterList();

    const addItem = useCallback(() => {
        addCounterBelow();
    }, [addCounterBelow]);

    function handleClick() {
        addItem();
    }

    const clearAll = useCallback(() => {
        refreshCounters();
    }, [refreshCounters])

    return (
        <div>
            {/* <Typography variant="title" color="inherit">
                {element}
            </Typography> */}
            <TextField
                id="select-type"
                select

                // className={classes.selectField}
                // value={this.state.type}
                // onChange={this.handleType}
                // SelectProps={{
                //     MenuProps: {
                //         className: classes.menu,
                //     },
                // }}
                sx={{ margin: '0.5em' }}
            >
                {typeOfCounter.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button
                variant="contained"
                color="secondary"
                // className={classes.addButton}
                onClick={() => handleClick()}
            >
                Add
            </Button>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                    // onChange={this.handleChange}
                    />
                }
                label="Add below"
            />
            <Button
                variant="contained"
                color="primary"
                // className={classes.refreshButton}
                onClick={clearAll}
            >
                Refresh
            </Button>
        </div>
    );
}

export default TotalCountBar;

