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

    const editText = useCallback(
        (id: number, item: WordCounterItemType, text: string) => {
          const newList = replaceItem(wordCounters, id, {
            ...item,
            text
          });
          setWordCouters(newList);
        },
        [setWordCouters, wordCounters]
      );

      const toggleCountTarget = useCallback(
          (id: number, item: WordCounterItemType) => {
            const newList = replaceItem(wordCounters, id, {
                ...item,
                isCounted: !item.isCounted
              });
              setWordCouters(newList);
          },
          [setWordCouters, wordCounters]
      );

    const addCounterBelow = useCallback(
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

    const addCounterTop = useCallback(
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
    const deleteCounter = useCallback(
        (id: number) => {
            const newItemList = removeItem(wordCounters, id);
            setWordCouters(newItemList);
        },
        [setWordCouters, wordCounters]
    );

    const refreshCounters = useCallback(
        () => {
            const newItemList = removeAllItems(wordCounters);
            setWordCouters(newItemList);
        },
        [setWordCouters, wordCounters]
    );
    return {
        editText,
        toggleCountTarget,
        addCounterBelow,
        addCounterTop,
        deleteCounter,
        refreshCounters,
    }


}

export { }

