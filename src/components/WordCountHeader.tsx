import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { IconButton, Switch } from '@mui/material';
import { Clear } from '@mui/icons-material';

type Props = {
    onActive: boolean;
}

const WordCountHeader: React.FC<Props> = (props) => {
    return (
    <div>
        {/* {element} */}
        <Switch
            checked={props.onActive}
        // onChange={() => switchCount()}
        />
        <IconButton
            aria-label="Delete"
        // onClick={() => deleteCounter(props.id)}
        >
            <Clear />
        </IconButton>

    </div>
    );
}

export default WordCountHeader;