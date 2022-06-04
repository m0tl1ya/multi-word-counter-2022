import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Paper } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import { Clear } from '@mui/icons-material';

import WordCountHeader from './WordCountHeader';
import TextInput from './TextInput'

type Props = {
    onActive: boolean;
}

const WordCounter: React.FC<Props> = (props) => {
    return (
        <Paper elevation={4}>
        <div>
          <WordCountHeader
            onActive={true}
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