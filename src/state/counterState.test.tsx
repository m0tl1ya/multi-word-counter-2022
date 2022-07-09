import { renderHook } from '@testing-library/react-hooks';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import { useWordCounterList, WordCounterItemType } from "./counterState";


afterEach(() => cleanup());


describe('Test counter state', () => {
    test('initial num of counters.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        expect(result.current.wordCounters.length).toBe(1)
    });
    test('edit text.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        const index: number = 0;
        const counter: WordCounterItemType = result.current.wordCounters[0]; 
        const newtext: string = "edited";
        act(() => {
            result.current.editText(index, counter, newtext)
        })
        expect(result.current.wordCounters[0].text).toEqual(newtext)
    });
    test('toggle count target.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        const index: number = 0;
        const counter: WordCounterItemType = result.current.wordCounters[0]; 
        const initialFlag: boolean = counter.isCounted;
        act(() => {
            result.current.toggleCountTarget(index, counter)
        })
        expect(result.current.wordCounters[0].text).not.toEqual(initialFlag);
    });
    test('add counter below.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        act(() => {
            result.current.addCounterBelow()
        })
        expect(result.current.wordCounters.length).toBe(2)
    });
    test('add counter top.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        act(() => {
            result.current.addCounterBelow()
        })
        expect(result.current.wordCounters.length).toBe(2)
    });
    test('delete counter.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        const index: number = 0;
        act(() => {
            result.current.deleteCounter(index)
        })
        expect(result.current.wordCounters.length).toEqual(0);
    });
    test('refresh.', () => {
        const { result } = renderHook(() => useWordCounterList(), {
            wrapper: RecoilRoot,
        });
        act(() => {
            result.current.refreshCounters()
        })
        expect(result.current.wordCounters.length).toBe(0)
    });
});


