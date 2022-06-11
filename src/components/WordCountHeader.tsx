import * as React from 'react';
import { IconButton, Switch } from '@mui/material';
import { Clear } from '@mui/icons-material';


import { WordCounterItemType } from "../state/counterState";
import { modeValue, useCountMode } from '../state/modeState';
import { createTheme } from '@mui/material';

const theme = createTheme();
const styleButton = () => ({
    top: '0.0em',
    marginLeft: theme.spacing(1),
});

type Props = {
    counter: WordCounterItemType;
    deleteItem: () => void,
    toggleItem: () => void,
}

const WordCountHeader: React.FC<Props> = (props) => {
    const { countMode } = useCountMode();

    return (
        <div>
            {(() => {
                switch (countMode) {
                    case modeValue.WORDS:
                        return <span>{props.counter.numWords} words</span>
                    case modeValue.CHARACTER:
                        return <span>{props.counter.numCharacters} characters</span>
                    case modeValue.CHARACTER_WITHOUT_SPACES:
                        return <span>{props.counter.numCharactersWithoutSpaces} characters</span>
                    default:
                        return <span>none</span>
                }
            })()}
            <Switch
                checked={props.counter.isCounted}
                onChange={props.toggleItem}
            />
            <IconButton
                aria-label="Delete"
                onClick={props.deleteItem}
                sx={styleButton}
            >
                <Clear />
            </IconButton>

        </div>
    );
}

export default WordCountHeader;