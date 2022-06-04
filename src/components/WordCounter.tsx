import * as React from 'react';
import { useCallback } from 'react';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { Paper } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import { Clear, Countertops, CountertopsOutlined } from '@mui/icons-material';

import { useRecoilValue } from "recoil";

import WordCountHeader from './WordCountHeader';
import TextInput from './TextInput'


import { useWordCounterList, wordCounterListState, characterCountState } from "../state/counterState";
import { WordCounterItemType } from '../state/counterState';
import { AnyARecord } from 'dns';

type Props = {
  counter: WordCounterItemType;
}

const WordCounter: React.FC<Props> = ({ counter }) => {
  const wordCounters = useRecoilValue(wordCounterListState);
  


  const { editText, toggleCountTarget, deleteCounter } = useWordCounterList();
  const id = React.useMemo(
    () => wordCounters.findIndex((listItem) => listItem === counter),
    [counter, wordCounters]
  );
  const deleteItem = useCallback(() => {
    deleteCounter(id);
  }, [deleteCounter, id]);

  const onChange = (event: any) => {
    editText(id, counter, event.target.value);
  };

  const toggleItem = useCallback(() => {
    toggleCountTarget(id, counter);
  }, [toggleCountTarget, id, counter]);

  const count = useRecoilValue(characterCountState(id));

  return (
    <Paper elevation={4}>
      <div>
        <WordCountHeader
        textLength={count}
          onActive={counter.isCounted}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      </div>
      <div>
        <TextInput
          text={counter.text}
          onChange={onChange}
        />
      </div>
    </Paper>
  );
}

export default WordCounter;