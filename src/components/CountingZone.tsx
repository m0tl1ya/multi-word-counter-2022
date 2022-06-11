import * as React from 'react';
import { useRecoilValue } from "recoil";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';

import WordCounter from './WordCounter'
import { wordCounterListState } from "../state/counterState";
import { useWordCounterList } from "../state/counterState";

const CountingZone: React.FC = () => {
  const wordCounters = useRecoilValue(wordCounterListState);
  const { addCounterBelow, refreshCounters } = useWordCounterList();

  const addItem = () => {
    addCounterBelow();
  };

  const clearAll = () => {
    refreshCounters();
  };

  return (
    <div>
      {wordCounters.map(counter =>
        <WordCounter
          key={counter.id}
          counter={counter}
        // actions={actions}
        // mode={mode}
        />)}
      <Fab
        color="primary"
        aria-label="Refresh"
        // className={classes.refreshButton}
        onClick={clearAll}
      >
        <RefreshIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="Add"
        // className={classes.addButton}
        onClick={addItem}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CountingZone;
