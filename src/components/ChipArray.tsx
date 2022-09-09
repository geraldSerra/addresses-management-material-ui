import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface ChipArrayProps {
  data: string[];
  handleDelete?: (arg: number) => void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const ChipArray = ({ data, handleDelete }: ChipArrayProps) => (
  <Paper
    sx={{
      display: 'block',
      flexWrap: 'wrap',
      listStyle: 'none',
      bgcolor: "white",
      px: 8,
      m: 3,
      mt: 10,
      maxWidth: '400px',
      borderRadius: '15px'
    }}
    component="ul"
  >
    {data.map((label, index) => {
      return (
        <ListItem
        sx={{
          display: 'block',
          py: 0,
          px: 0,
          m: 2,
        }}
          key={index}
        >
          <Chip
            label={label}
            onDelete={handleDelete ? () => handleDelete(index) : undefined}
          />
        </ListItem>
      );
    })}
  </Paper>
);
