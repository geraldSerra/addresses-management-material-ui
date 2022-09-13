import { Container } from '@mui/material';

import Header from '../Typography';
import { Clients } from '../Clients';


const Main = () => (
  <Container  sx={{
    width: {xs: '100%', sm: '80%' },
  }}>
      <Header />
      <Clients />
  </Container>
);

export default Main;
