import * as React from 'react';
import { Paper } from '@mui/material';
import { useRecoilValue } from "recoil";
import WordCountHeader from './WordCountHeader';
import TextInput from './TextInput'
import { useWordCounterList, wordCounterListState } from "../state/counterState";
import { WordCounterItemType } from '../state/counterState';

const styleCounter = {
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 2,
  marginTop: '1em',
  width: '80%',
  marginLeft: '2em',
  display: 'flex',
  flexFlow: 'column',
  flexWrap: 'wrap',
  textAlign: 'left',
} as const;

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

  const deleteItem = () => {
    deleteCounter(id);
  };

  const onChange = (event: any) => {
    editText(id, counter, event.target.value);
  };

  const toggleItem = () => {
    toggleCountTarget(id, counter);
  };


  return (
    <Paper elevation={4} sx={styleCounter}>
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