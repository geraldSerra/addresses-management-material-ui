import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box
      sx={{
        width: '100%',
        //maxWidth: 500,
        textAlign: 'center',
        marginBlock: '30px',
      }}
    >
      <Typography variant="h1" gutterBottom>
        Clients
      </Typography>
    </Box>
  );
}
