import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ChipArray } from '../ChipArray';
import { Client, clients, columns } from '../../data/clients';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const Clients = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [inputText, setInputText] = useState('');
  const matches = useMediaQuery(useTheme().breakpoints.up('sm'));
  columns[columns.length - 1].renderCell = () => <ExpandButton />;

  const handleDelete = (arg: number) => {
    if (!selectedClient) return;
    const newAddresses = selectedClient.addresses.filter(
      (_, index) => index !== arg
    );
    setSelectedClient({ ...selectedClient, addresses: newAddresses });
  };

  const ExpandButton = () => {
    return (
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          setOpen(true);
        }}
      >
        Expand
      </Button>
    );
  };

  return (
    <>
      <DataGrid
        sx={{
          height: 550,
          width: '100%',
          mb: 1,
          mt: '15px',
          mx: 'auto',
        }}
        rows={clients}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 15]}
        onRowClick={(e) => {
          setSelectedClient(clients.filter((client) => client.id === e.id)[0]);
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      <Drawer
        PaperProps={{
          sx: {
            width:{xs: 'flex', sm: '40%' },
            height:{xs: '55%', sm: '85%' },
            px: 4,
            py: 9,
          },
        }}
        open={open}
        anchor={matches ? 'right' : 'bottom'}
        onClose={() => {
          setOpen(false);
        }}
      >
        <ChipArray
          data={selectedClient?.addresses ?? []}
          handleDelete={handleDelete}
        />
        <Box
          component="form"
          sx={{
            display: 'block',
            listStyle: 'none',
            py: '10px',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            label="Add your address"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Box
            sx={{
              py: '10px',
              display: 'block',
              marginLeft: 'auto',
            }}
          >
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                if (inputText != '') {
                  selectedClient?.addresses.push(inputText);
                }
                setInputText('');
              }}
            >
              Add
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};
