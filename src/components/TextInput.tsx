import * as React from 'react';

import { TextField } from '@mui/material';

const styleTextInput = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    margin: '1em',

  } as const;
  


type Props = {
    text: string;
    onChange: (event: any) => void
}

const TextInput: React.FC<Props> = (props) => {
    return (
        <TextField
            id="textarea"
            label="With placeholder multiline"
            variant="standard"
            placeholder="Paste your text"
            multiline
            value={props.text}
            // className={classes.textField}
            margin="normal"
            onChange={props.onChange}
            autoFocus={true}
            sx={styleTextInput}
        />
    );
}

export default TextInput;