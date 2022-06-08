import * as React from 'react';

import { TextField } from '@mui/material';

type Props = {
    text: string;
    onChange: (event: any) => void
}

const TextInput: React.FC<Props> = (props) => {
    return (
        <TextField
            id="textarea"
            label="With placeholder multiline"
            placeholder="Paste your text"
            multiline
            value={props.text}
            // className={classes.textField}
            margin="normal"
            onChange={props.onChange}
            autoFocus={true}
        />
    );
}

export default TextInput;