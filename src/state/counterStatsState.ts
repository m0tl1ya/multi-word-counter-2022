import { selector, selectorFamily } from "recoil";
import { wordCounterListState } from "./counterState";


export type CounterStatsType = {
    totalNumOfWords: number;
    totalNumOfCharacters: number;
    totalNumOfCharactersWithoutSpace: number;
}

export const wordCounterStatsState = selectorFamily({
    key: 'wordCounterStatsState',
    get: id => ({ get }) => {
        const counter = get(wordCounterListState).find(counter =>
            counter.id === id);
        if (!counter) {
            return 0;
        } else {
            return counter.text.length
        }

    }
});

export const totalStatsState = selector<CounterStatsType>({
    key: "totalStatsState",
    get: ({ get }) => {
        const wordCounters = get(wordCounterListState);
        const totalNumOfWords = wordCounters.reduce((sum, counter) =>
            counter.isCounted ? sum += counter.numWords : sum += 0, 0);
        const totalNumOfCharacters = wordCounters.reduce((sum, counter) =>
            counter.isCounted ? sum += counter.numCharacters : sum += 0, 0);
        const totalNumOfCharactersWithoutSpace = wordCounters.reduce((sum, counter) =>
            counter.isCounted ? sum += counter.numCharactersWithoutSpaces : sum += 0, 0);
        return {
            totalNumOfWords,
            totalNumOfCharacters,
            totalNumOfCharactersWithoutSpace,
        };
    }
});

