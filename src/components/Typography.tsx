import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '20px',
        textAlign: { xs: 'center', sm: 'left' },
        // maxWidth: 500,
      }}
    >
      <Typography variant="h1">Clients</Typography>
    </Box>
  );
}
