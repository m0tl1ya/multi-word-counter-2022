import { snapshot_UNSTABLE } from 'recoil';
import { cleanup } from '@testing-library/react';

import { wordCounterListState } from "./counterState";
import { CounterStatsType, totalStatsState } from "./counterStatsState";

afterEach(() => cleanup());



describe('Test counter stats', () => {
    const expectedInitialStats: CounterStatsType = {
        "totalNumOfCharacters": 0,
        "totalNumOfCharactersWithoutSpace": 0,
        "totalNumOfWords": 0
    };
    const testCase = [
        {
            id: 0,
            text: "a b",
            numWords: 0,
            numCharacters: 0,
            numCharactersWithoutSpaces: 0,
            isCounted: true
        },
        {
            id: 1,
            text: "c d ef",
            numWords: 0,
            numCharacters: 0,
            numCharactersWithoutSpaces: 0,
            isCounted: true
        }
    ]
    const expectedTestedStats: CounterStatsType = {
        "totalNumOfCharacters": 9,
        "totalNumOfCharactersWithoutSpace": 6,
        "totalNumOfWords": 5
    };
    test('initial num of counters.', () => {
        const initialSnapshot = snapshot_UNSTABLE();
        expect(initialSnapshot.getLoadable(totalStatsState).valueOrThrow()).toStrictEqual(expectedInitialStats);
        
        const release = initialSnapshot.retain();
        try {
            const testSnapshot = snapshot_UNSTABLE(({ set }) => set(wordCounterListState, testCase));
            expect(testSnapshot.getLoadable(totalStatsState).valueOrThrow()).toStrictEqual(expectedTestedStats);
        } catch (error) {
            
        }finally {
            release();
        }
    });
});


