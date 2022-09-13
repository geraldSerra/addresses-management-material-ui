import { Container } from '@mui/material';
import Types from '../Typography';
import { Clients } from '../Clients';

const Main = () => (
  <Container  sx={{
    width: {xs: '100%', sm: '80%' },
  }}>
      <Types />
      <Clients />
  </Container>
);

export default Main;
