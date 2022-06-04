import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Paper } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import { Clear, CountertopsOutlined } from '@mui/icons-material';

import WordCountHeader from './WordCountHeader';
import TextInput from './TextInput'
import { WordCounterItemType } from '../state/counterState';


type Props = {
    counter: WordCounterItemType;
}

const WordCounter: React.FC<Props> = ({ counter }) => {
    return (
        <Paper elevation={4}>
        <div>
          <WordCountHeader
            onActive={counter.isCounted}
          />
        </div>
        <div>
          <TextInput
          />
        </div>
      </Paper>
    );
}

export default WordCounter;