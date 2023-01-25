import React from "react";
import { atom, RecoilState, useRecoilValue } from "recoil";
import { renderHook } from '@testing-library/react-hooks';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import CountingZone from "./CountingZone";
import { wordCounterListState, useWordCounterList, WordCounterItemType } from "../state/counterState";


describe('Test of CountingZone', () => {
    test('rendering component.', () => {
        render(
            <RecoilRoot>
                <CountingZone />
            </RecoilRoot>,
        );
    });
});
