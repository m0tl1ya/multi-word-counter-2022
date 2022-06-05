import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

export const modeValue = {
    WORDS: "Words",
    CHARACTER: "Characters",
    CHARACTER_WITHOUT_SPACES: "Characters without spaces"
};

export type CountModeType = typeof modeValue[keyof typeof modeValue];

export const countModeState = atom<CountModeType>({
    key: 'CountModeState',
    default: modeValue.CHARACTER,
})

export const useCountMode = () => {
    const [countMode, setCountMode] = useRecoilState(countModeState);
    const switchCountMode = (value: CountModeType) => {
        setCountMode(value);
    }
    return {countMode, switchCountMode};
};

