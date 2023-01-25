import React from "react";
import { atom, RecoilState, useRecoilValue } from "recoil";
import { renderHook } from '@testing-library/react-hooks';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import CountingZone from "./CountingZone";
import WordCounter from "./WordCounter";
import WordCountHeader from "./WordCountHeader";
import { wordCounterListState, useWordCounterList, WordCounterItemType } from "../state/counterState";


const renderRecoilHooks = () =>
    renderHook(() => useRecoilValue(wordCounterListState), {
        wrapper: ({ children }: { children: React.ReactNode }) =>
            RecoilRoot({
                children,
            }),
    });

describe('Test of WordCounterHeader', () => {
    test('rendering test.', () => {
        renderRecoilHooks();
    });
});