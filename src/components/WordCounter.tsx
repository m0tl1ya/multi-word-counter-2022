import * as React from 'react';
import { useCallback } from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Paper } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import { Clear, CountertopsOutlined } from '@mui/icons-material';

import { useRecoilValue } from "recoil";

import WordCountHeader from './WordCountHeader';
import TextInput from './TextInput'


import { useWordCounterList, wordCounterListState } from "../state/counterState";
import { WordCounterItemType } from '../state/counterState';

type Props = {
  counter: WordCounterItemType;
}

const WordCounter: React.FC<Props> = ({ counter }) => {
  const wordCounters = useRecoilValue(wordCounterListState);
  const { deleteCounter } = useWordCounterList();
  const id = React.useMemo(
    () => wordCounters.findIndex((listItem) => listItem === counter),
    [counter, wordCounters]
  );
  const deleteItem = useCallback(() => {
    deleteCounter(id);
  }, [deleteCounter, id]);

  return (
    <Paper elevation={4}>
      <div>
        <WordCountHeader
          onActive={counter.isCounted}
          deleteItem={deleteItem}
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