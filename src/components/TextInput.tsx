import * as React from 'react';

import { TextField } from '@mui/material';

type Props = {
    // onActive: boolean;
}

const TextInput: React.FC<Props> = () => {
    return (
        <TextField
            id="textarea"
            label="With placeholder multiline"
            placeholder="Paste your text"
            multiline
            // value={this.props.text}
            // className={classes.textField}
            margin="normal"
            // onChange={this.handleChange}
            autoFocus={true}
        />
    );
}

export default TextInput;