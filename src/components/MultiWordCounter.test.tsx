import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import MultiWordCounter from "./MultiWordCounter";



describe('Test of MultiWordCounter', () => {
    test('rendering test.', () => {
        render(
            <RecoilRoot>
                <MultiWordCounter />
            </RecoilRoot>,
        );
    });
});
