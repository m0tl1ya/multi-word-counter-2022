import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';


import CountingZone from './CountingZone';
import TotalCountBar from './TotalCountBar'

type Props = {
    // onActive: boolean;
}


const MultiWordCounter: React.FC<Props> = () => {
    return (
        <div>
            <TotalCountBar
            //   counters={counters}
            //   addCounterTop={actions.counterActions.addCounterTop}
            //   addCounterBelow={actions.counterActions.addCounterBelow}
            //   refresh={actions.counterActions.refresh}
            //   switchMode={actions.modeActions}
            />
            <CountingZone
            //   counters={counters}
            //   actions={actions.counterActions}
            //   mode={mode}
            />
        </div>
    );
}

export default MultiWordCounter;