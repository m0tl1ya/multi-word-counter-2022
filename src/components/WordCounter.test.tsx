import React from "react";
import { useRecoilValue } from "recoil";
import { renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from "recoil";

import { wordCounterListState } from "../state/counterState";


const renderRecoilHooks = () =>
    renderHook(() => useRecoilValue(wordCounterListState), {
        wrapper: ({ children }: { children: React.ReactNode }) =>
            RecoilRoot({
                children,
            }),
    });
    

describe('Test of WordCounter', () => {
    test('rendering test.', () => {
        renderRecoilHooks();
    });
});
