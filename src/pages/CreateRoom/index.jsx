import React, { useCallback, useMemo, useState } from 'react'
import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, IconButton, Stack, TextField} from '@mui/material'
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { MaterialReactTable } from 'material-react-table';
import { MockRoomData } from "../../data/mockData";
import { Delete, Edit } from '@mui/icons-material';

const CreateRoom = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [tableData, setTableData] = useState(() => MockRoomData);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const handleCreateNewRow = (values) => {
        tableData.push(values);
        setTableData([...tableData]);
        // API Create Room
      };

    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      };

    const handleDeleteRow = useCallback(
        (row) => {
          if (
            !window.confirm(`Are you sure you want to delete ${row.getValue('name')}`)
          ) {
            return;
          }
          //send api delete request here, then refetch or update local table data for re-render
          tableData.splice(row.index, 1);
          setTableData([...tableData]);
        },
        [tableData],
      );

    const columns = useMemo(
        () => [
        {
            accessorKey: "id", 
            header: "ID", 
            enableColumnOrdering: false,
            enableEditing: false, //disable editing on this column
            enableSorting: false, 
            size: 50},
        {
            accessorKey: "name",
            header: "Name",
            size:100,
        },
        {
            accessorKey: "desc",
            header: "Description",
            size:200,
            
        },
        {
            accessorKey: "photo",
            header: "Photo",
            size:150,
            
        },
        {
            accessorKey: "status",
            header: "Status",
            size:75,
            Cell: ({ row: {status} }) => (
                <Box
                    sx={{  
                        width:"60%",
                        m:"0 auto",
                        p:"5px",
                        display:"flex",
                        justifyContent:"center",
                        backgroundColor:
                            status === "available"
                            ? colors.greenAccent[600]
                            : status === "reserved"
                            ? colors.redAccent[500]
                            : colors.redAccent[500],
                        
                        borderRadius:"4px",
                }}
                >  
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {status}
                    </Typography>
                </Box>
            ),
        },
    ], [], );
  return (
    <Box m="20px">
        <Header title="ROOM" subtitle="Room Overview and More!"/>
        <Box>
            <MaterialReactTable
                data={tableData}
                columns={columns}
                enableRowActions
                enableEditing
                onEditingRowSave={handleSaveRowEdits}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                      <Tooltip arrow placement="left" title="Edit">
                        <IconButton onClick={() => table.setEditingRow(row)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow placement="right" title="Delete">
                        <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  renderTopToolbarCustomActions={() => (
                    <Button
                      color="secondary"
                      onClick={() => window.location.href = "/room/create"}
                      variant="contained"
                    >
                      Create New Room
                    </Button>
                  )}
            >
            </MaterialReactTable>
            {/* <CreateNewAccountModal
                columns={columns}
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={handleCreateNewRow}
            /> */}
        </Box>
    </Box>
  );
};

// export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
//     const [values, setValues] = useState(() =>
//       columns.reduce((acc, column) => {
//         acc[column.accessorKey ?? ''] = '';
//         return acc;
//       }, {}),
//     );
  
//     const handleSubmit = () => {
//       //put your validation logic here
//       onSubmit(values);
//       onClose();
//     };
  
//     return (
//       <Dialog open={open}>
//         <DialogTitle textAlign="center">Create New Room</DialogTitle>
//         <DialogContent>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <Stack
//               sx={{
//                 width: '100%',
//                 minWidth: { xs: '300px', sm: '360px', md: '400px' },
//                 gap: '1.5rem',
//               }}
//             >
//               {columns.map((column) => (
//                 <TextField
//                   key={column.accessorKey}
//                   label={column.header}
//                   name={column.accessorKey}
//                   onChange={(e) =>
//                     setValues({ ...values, [e.target.name]: e.target.value })
//                   }
//                 />
//               ))}
//             </Stack>
//           </form>
//         </DialogContent>
//         <DialogActions sx={{ p: '1.25rem' }}>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button color="secondary" onClick={handleSubmit} variant="contained">
//             Create New Room
//           </Button>
//         </DialogActions>
//       </Dialog>
//     );
//   };

export default CreateRoom