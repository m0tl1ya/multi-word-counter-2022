import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { IconButton, Switch } from '@mui/material';
import { Clear } from '@mui/icons-material';

import { useRecoilValue } from "recoil";

import { useWordCounterList, wordCounterListState } from "../state/counterState";


type Props = {
    onActive: boolean;
    deleteItem: () => void,
}

const WordCountHeader: React.FC<Props> = (props) => {
    return (
        <div>
            {/* {element} */}
            <Switch
                checked={props.onActive}
            // onChange={() => switchCount()}
            />
            <IconButton
                aria-label="Delete"
            onClick={props.deleteItem}
            >
                <Clear />
            </IconButton>

        </div>
    );
}

export default WordCountHeader;