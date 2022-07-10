import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import MultiWordCounter from "./MultiWordCounter";
import TextInput from "./TextInput"

type Props = {
    text: string;
    onChange: (event: any) => void
}

describe('Test of TextInput', () => {
    test('rendering test.', async () => {
        const fakeInput: Props = {
            text: "test",
            onChange: (event: any) => { ; }
        };
        render(
            <RecoilRoot>
                <TextInput text={fakeInput.text} onChange={fakeInput.onChange} />
            </RecoilRoot>,
        );
        expect(screen.getByLabelText('With placeholder multiline')).toHaveTextContent("test");
        expect(screen.getByLabelText('With placeholder multiline')).not.toHaveTextContent("test2");
    });
});