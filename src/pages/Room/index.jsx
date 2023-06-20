import React, { useCallback, useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box, Typography, useTheme, Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, IconButton} from '@mui/material'
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { MockReserveData } from "../../data/mockData";
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Room = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [tableData, setTableData] = useState(() => MockReserveData);

    const handleAcceptRow = useCallback(
        (row) => {
            //API
        },
        );

    const handleRejectRow = useCallback(
        (row) => {
            //API
        },
        );
    
    const columns = useMemo(
        () => [
        {accessorKey: "id", header: "ID", size: 25},
        {
            accessorKey: "start_time",
            header: "Start Time",
            size:100,
        },
        {
            accessorKey: "end_time",
            header: "End Time",
            size:100,
            
        },
        {
            accessorKey: "room",
            header: "Room",
            size:100,
            
        },
        {
            accessorKey: "email",
            header: "Email",
            size:150,
            
        },
        {
            accessorKey: "event",
            header: "Event",
            size:100,
            
        },
        {
            accessorKey: "status",
            header: "Status",
            size:100,
            Cell: ({ row: {status} }) => (
                <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={ colors.greenAccent[600] }
                    borderRadius="4px"
                    color= "#fff"
                > 
                    <PendingOutlinedIcon /> 
                    <Typography sx={{ ml: "5px" }}>
                        {status}
                    </Typography>
                </Box>
            ),
        },
    ], [], );

  return (
    <Box m="20px">
        <Header title="ROOM" subtitle="Reservation Request and Approval"/>
        <Box>
            <MaterialReactTable
                data={tableData}
                columns={columns}
                enableRowActions
                renderRowActions={({ row }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                      <Tooltip arrow placement="left" title="Accept">
                        <IconButton color="success" onClick={() => handleAcceptRow(row)}>
                          <CheckIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow placement="right" title="Decline">
                        <IconButton color="error" onClick={() => handleRejectRow(row)}>
                          <ClearIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )
                }
            >

            </MaterialReactTable>

        </Box>

    </Box>
  )
}

export default Room