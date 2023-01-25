import * as React from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import { createTheme } from '@mui/material';

import WordCounter from './WordCounter'
import { useWordCounterList } from "../state/counterState";

const theme = createTheme();
const styleAddButton = {
  position: 'fixed',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}

const styleRefreshButton = {
  color: 'white',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    position: 'fixed',
    bottom: theme.spacing(12),
    right: theme.spacing(2),
}

const CountingZone: React.FC = () => {
  const { wordCounters, addCounterBelow, refreshCounters } = useWordCounterList();

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
        />)}
      <Fab
        color="primary"
        aria-label="Refresh"
        onClick={clearAll}
        sx={styleRefreshButton}
      >
        <RefreshIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="Add"
        onClick={addItem}
        sx={styleAddButton}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CountingZone;
