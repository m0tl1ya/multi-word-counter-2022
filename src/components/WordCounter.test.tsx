import React from "react";
import { atom, RecoilState, useRecoilValue } from "recoil";
import { renderHook } from '@testing-library/react-hooks';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import CountingZone from "./CountingZone";
import WordCounter from "./WordCounter";
import { wordCounterListState, useWordCounterList, WordCounterItemType } from "../state/counterState";


const renderRecoilHooks = () =>
    renderHook(() => useRecoilValue(wordCounterListState), {
        wrapper: ({ children }: { children: React.ReactNode }) =>
            RecoilRoot({
                children,
            }),
    });
    
type Props = {
    counter: WordCounterItemType;
}

describe('Test of WordCounter', () => {
    test('rendering test.', () => {
        renderRecoilHooks();
        // render(
        //     <RecoilRoot>
        //         <WordCounter />
        //     </RecoilRoot>,
        // );
    });
});
