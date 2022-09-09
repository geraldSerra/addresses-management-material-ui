import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { DataGrid, GridRowId, GridToolbar } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ChipArray } from '../ChipArray';
import { Client, clients, columns } from '../../data/clients';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Clients = () => {
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [inputText, setInputText] = useState('');

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

  columns[columns.length - 1].renderCell = () => <ExpandButton />;

  return (
    <>
      <Box sx={{ height: 550, width: '100%', mb: 1, mt: '15px' }}>
        <DataGrid
          rows={clients}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 15]}
          onRowClick={(e) => {
            setSelectedClient(
              clients.filter((client) => client.id === e.id)[0]
            );
          }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      <Drawer
        PaperProps={{
          sx: {
            width: 450,
            px: 4,
            py: 9,
          },
        }}
        open={open}
        anchor="right"
        hideBackdrop={false}
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
            id="filled-basic"
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
              marginLeft: 'auto'
            }}
          >
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => {
                debugger;
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

export default Clients;
