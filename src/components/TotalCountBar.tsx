import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

import { useRecoilValue } from "recoil";

import { useWordCounterList } from "../state/counterState";
import { useState, useCallback } from 'react';
import { totalStatsState } from '../state/counterStatsState';
import { modeValue, useCountMode } from '../state/modeState';

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
        <div>

            <Typography variant="h2" color="inherit">
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
            <TextField
                id="select-type"
                select

                // className={classes.selectField}
                value={countMode}
                onChange={handleSelect}
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
                onClick={addItem}
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
                // className={classes.refreshButton}
                onClick={clearAll}
            >
                Refresh
            </Button>
        </div>
    );
}

export default TotalCountBar;

