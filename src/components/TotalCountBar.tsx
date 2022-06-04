import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

const typeOfCounter = [
    {
        value: 'Words',
        label: 'Words',
    },
    {
        value: 'Characters',
        label: 'Characters',
    },
    {
        value: 'Characters including space',
        label: 'Characters including space',
    },
];


type Props = {
    // onActive: boolean;
}


const TotalCountBar: React.FC<Props> = () => {
    return (
        <div></div>
    );
}

export default TotalCountBar;

