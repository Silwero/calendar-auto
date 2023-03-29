import { ButtonGroup } from '@mui/material';
import { Container } from '@mui/system';

export const BottomActions = ({ children }) => {
  return (
    <Container maxWidth="md"
      sx={{
        mt: 'auto',
      }}
    >
      <ButtonGroup variant="contained" fullWidth size="large">
        {children}
      </ButtonGroup>
    </Container>
  );
};
