import { render } from '@testing-library/react';
import { RecoilRoot } from "recoil";
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