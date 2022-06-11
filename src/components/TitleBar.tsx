import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';



export default function TitleBar() {
  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
      }}
    >
      <Typography variant="h5" color="inherit"
        sx={{
          flex: 1,
          padding: '0.5em',
          textAlign: 'left'
        }}>
        Multi Word Counter
      </Typography>
    </AppBar >
  );
}
