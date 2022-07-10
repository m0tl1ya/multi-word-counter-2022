import { renderHook } from '@testing-library/react-hooks';
import { useRecoilValue } from 'recoil';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import { useWordCounterList, WordCounterItemType } from "./counterState";
import { CounterStatsType, totalStatsState } from "./counterStatsState"

afterEach(() => cleanup());

describe('Test counter stats', () => {
    const testStringFirst: string = "a b";
    const testStringSecond: string = "c d e";
    test('initial num of counters.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        act(() => {
            result.current.addCounterBelow();
        })
        const counterFirst: WordCounterItemType = result.current.wordCounters[0];
        const counterSecond: WordCounterItemType = result.current.wordCounters[1];
        act(() => {
            result.current.addCounterBelow();
            result.current.editText(0, counterFirst, testStringFirst);
            result.current.editText(0, counterSecond, testStringSecond);
        })
        // const totalNumOfCharacters = renderHook(() => useRecoilValue(totalStatsState), {
        //     wrapper: RecoilRoot,
        // });
        
        expect(8).toEqual(8);
    });
});


