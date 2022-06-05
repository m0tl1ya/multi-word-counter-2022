import { useCallback } from "react";
import { atom, useRecoilState, useSetRecoilState, selector, selectorFamily } from "recoil";

export type WordCounterItemType = {
    id: number;
    text: string;
    numWords: number;
    numCharacters: number;
    numCharactersWithoutSpaces: number;
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

function replaceItem(
    arr: WordCounterItemType[],
    id: number,
    newValue: WordCounterItemType
) {
    return [...arr.slice(0, id), newValue, ...arr.slice(id + 1)];
}

function removeItem(arr: WordCounterItemType[], id: number) {
    return [...arr.slice(0, id), ...arr.slice(id + 1)];
}

function removeAllItems(arr: WordCounterItemType[]) {
    return []
}


export const useWordCounterList = () => {
    const [wordCounters, setWordCouters] = useRecoilState(wordCounterListState);

    const editText = (id: number, item: WordCounterItemType, text: string) => {
        const newList = replaceItem(wordCounters, id, {
            ...item,
            text: text,
        });
        setWordCouters(newList);
    };


    const toggleCountTarget = (id: number, item: WordCounterItemType) => {
        const newList = replaceItem(wordCounters, id, {
            ...item,
            isCounted: !item.isCounted
        });
        setWordCouters(newList);
    };

    const addCounterBelow = useCallback(
        () => {
            setWordCouters((oldWordCounters) => [
                ...oldWordCounters,
                {
                    id: getNextId(),
                    text: "",
                    numWords: 0,
                    numCharacters: 0,
                    numCharactersWithoutSpaces: 0,
                    isCounted: true
                }
            ]);
        },
        [setWordCouters]
    );

    const addCounterTop = () => {
        setWordCouters((oldWordCounters) => [
            {
                id: getNextId(),
                text: "",
                numWords: 0,
                numCharacters: 0,
                numCharactersWithoutSpaces: 0,
                isCounted: true
            },
            ...oldWordCounters
        ]);
    };
    const deleteCounter = (id: number) => {
        const newItemList = removeItem(wordCounters, id);
        setWordCouters(newItemList);
    };

    const refreshCounters = () => {
        const newItemList = removeAllItems(wordCounters);
        setWordCouters(newItemList);
    };

    return {
        editText,
        toggleCountTarget,
        addCounterBelow,
        addCounterTop,
        deleteCounter,
        refreshCounters,
    }


}


export const characterCountState = selectorFamily({
    key: 'characotCountState',
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

