import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import MultiWordCounter from "./MultiWordCounter";
import TotalCountBar from "./TotalCountBar";



describe('Test of TotalCountBar', () => {
    test('rendering test.', () => {
        render(
            <RecoilRoot>
                <TotalCountBar />
            </RecoilRoot>,
        );
    });
});