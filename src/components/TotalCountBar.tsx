import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

import { useRecoilValue } from "recoil";

import { useWordCounterList } from "../state/counterState";
import { useState, useCallback } from 'react';
import { totalStatsState } from '../state/counterStatsState';
import { modeValue, useCountMode } from '../state/modeState';

const styleAddButton = {
    color: 'white',
    margin: '0.5em',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
}

const styleRefreshButton = {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    margin: '0.5em',
    color: 'white',
    backgroundColor: '#2196F3',
}

const styleSelect = {
    width: 300,
    margin: '0.5em',
    textAlign: 'left',
}

const typeOfCounter = [
    {
        value: modeValue.WORDS,
        label: 'Words',
    },
    {
        value: modeValue.CHARACTER,
        label: 'Characters',
    },
    {
        value: modeValue.CHARACTER_WITHOUT_SPACES,
        label: 'Characters without spaces',
    },
];


const TotalCountBar: React.FC = () => {
    const totalCountStats = useRecoilValue(totalStatsState);

    const [addBelow, setAddBelow] = useState(true);
    const { countMode, switchCountMode } = useCountMode();

    const handleSelect = (event: any) => {
        switch (event.target.value) {
            case "Words":
                switchCountMode(modeValue.WORDS);
                break;
            case "Characters":
                switchCountMode(modeValue.CHARACTER);
                break;
            case "Characters without spaces":
                switchCountMode(modeValue.CHARACTER_WITHOUT_SPACES);
                break;
            default:
                break;
        }

    }

    const { addCounterBelow, addCounterTop, refreshCounters } = useWordCounterList();

    const addItem = () => {
        if (addBelow) {
            addCounterBelow();
        } else {
            addCounterTop();
        }

    };

    const clearAll = useCallback(() => {
        refreshCounters();
    }, [refreshCounters])

    const handleCheckBox = () => {
        setAddBelow(!addBelow);
    }


    return (
        <Box>
            <Typography variant="h3" color="inherit" sx={{margin: '0.2em'}}>
                {(() => {
                    switch (countMode) {
                        case modeValue.WORDS:
                            return <span>{totalCountStats.totalNumOfWords} words</span>
                        case modeValue.CHARACTER:
                            return <span>{totalCountStats.totalNumOfCharacters} characters</span>
                        case modeValue.CHARACTER_WITHOUT_SPACES:
                            return <span>{totalCountStats.totalNumOfCharactersWithoutSpace} characters</span>
                        default:
                            return <span>none</span>
                    }
                })()}
            </Typography>
            <Box sx={{ display: 'flex', margin: '2em' }}>
                <TextField
                    id="select-type"
                    select
                    variant="standard"

                    // className={classes.selectField}
                    value={countMode}
                    onChange={handleSelect}
                    // SelectProps={{
                    //     MenuProps: {
                    //         className: classes.menu,
                    //     },
                    // }}
                    sx={styleSelect}
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
                    onClick={addItem}
                    sx={styleAddButton}
                >
                    Add
                </Button>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={addBelow}
                            onChange={handleCheckBox}
                        />
                    }
                    label="Add below"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={clearAll}
                    sx={styleRefreshButton}
                >
                    Refresh
                </Button>
            </Box>

        </Box>
    );
}

export default TotalCountBar;

