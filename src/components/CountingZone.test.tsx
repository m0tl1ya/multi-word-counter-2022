import { render } from '@testing-library/react';
import { RecoilRoot } from "recoil";

import CountingZone from "./CountingZone";

describe('Test of CountingZone', () => {
    test('rendering component.', () => {
        render(
            <RecoilRoot>
                <CountingZone />
            </RecoilRoot>,
        );
    });
});
