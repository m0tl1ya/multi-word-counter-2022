import { useCallback } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export type WordCounterItemType = {
    id: number;
    text: string;
    isCounted: boolean;
}

export const wordCounterListState = atom<WordCounterItemType[]>({
    key: "wordCounterListState",
    default: []
})

let id = 0;
function getNextId() {
    return id++;
}


function removeItem(arr: WordCounterItemType[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


export const useWordCounterList = () => {
    const [wordCounters, setWordCouters] = useRecoilState(wordCounterListState);
    const addItemBelow = useCallback(
        () => {
            setWordCouters((oldWordCounters) => [
                ...oldWordCounters,
                {
                    id: getNextId(),
                    text: "",
                    isCounted: true
                }
            ]);
        },
        [setWordCouters]
    );

    const addItemTop = useCallback(
        () => {
            setWordCouters((oldWordCounters) => [
                {
                    id: getNextId(),
                    text: "",
                    isCounted: true
                },
                ...oldWordCounters
            ]);
        },
        [setWordCouters]
    );
    const deleteItem = useCallback(
        (id: number) => {
            const newItemList = removeItem(wordCounters, id);
            setWordCouters(newItemList);
        },
        [setWordCouters, wordCounters]
    );
    return {
        addItemBelow,
        addItemTop,
        deleteItem,
    }


}

export { }

