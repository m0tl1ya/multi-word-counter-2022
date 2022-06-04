import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Paper } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import { Clear, Refresh } from '@mui/icons-material';

import Fab from '@mui/material/Fab';


import { useCallback } from 'react';
import { useRecoilValue } from "recoil";

import WordCounter from './WordCounter'
import {useWordCounterList, wordCounterListState} from "../state/counterState";



type Props = {
    // onActive: boolean;
}

const CountingZone: React.FC<Props> = () => {
    const wordCounters = useRecoilValue(wordCounterListState);

    return (
        <div>
        {wordCounters.map(counter =>
          <WordCounter
            key={counter.id}
            counter={counter}
            // actions={actions}
            // mode={mode}
          />)}
      </div>
    );
}

export default CountingZone;
