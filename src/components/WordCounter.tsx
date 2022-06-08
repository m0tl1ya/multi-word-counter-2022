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


import { useWordCounterList, wordCounterListState } from "../state/counterState";
import { WordCounterItemType } from '../state/counterState';
import { AnyARecord } from 'dns';
import { countModeState } from '../state/modeState';
import { modeValue, useCountMode } from '../state/modeState';


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

  // const countMode = useRecoilValue(countModeState);
  const { countMode, switchCountMode } = useCountMode();

  return (
    <Paper elevation={4}>
      <div>
        <WordCountHeader
          // textLength={counter.numCharacters}
          // onActive={counter.isCounted}
          counter={counter}
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