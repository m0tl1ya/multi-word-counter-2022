import * as React from 'react';
import { useRecoilValue } from "recoil";
import WordCounter from './WordCounter'
import { wordCounterListState } from "../state/counterState";



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
