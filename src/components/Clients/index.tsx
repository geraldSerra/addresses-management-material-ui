import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { DataGrid, GridRowId, GridToolbar } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ChipArray } from '../ChipArray';
import { Client, clients, columns } from '../../data/clients';
import TextField from '@mui/material/TextField';

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

  let textAddress: string = '';

  return (
    <>
      <Box
        sx={{ width: '100%', backgroundColor: 'white', marginBlock: '30px' }}
      >
        <Box sx={{ height: 550, width: '100%', mb: 1 }}>
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
      </Box>

      <Drawer
        PaperProps={{
          sx: {
            // backgroundColor: 'rgba(30, 139, 220, 0.6)',
            display: 'flex',
            //Vertical
            //  justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: 400,
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
        <div
          style={{
            display: 'block',
            alignItems: 'center',
            listStyle: 'none',
            backgroundColor: 'white',
            borderRadius: '4px',
            width: '200px',
            height: '70px',
          }}
        >
          <TextField
            value={inputText}
            disabled={false}
            multiline={true}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            id="outlined-basic"
            color="primary"
            label="Add your address"
            variant="outlined"
            sx={{ backgroundColor: 'white', px: 'auto' }}
          />
        </div>
        <Stack spacing={2} direction="row">
          <Box sx={{ width: 'auto', m: 'auto', py: '15px', display: 'block' }}>
            <Button
              variant="contained"
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
