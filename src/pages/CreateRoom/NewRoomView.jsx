import React from 'react'
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, Typography, useTheme, Button, Tooltip, IconButton, TextField, Stack, InputLabel, Input} from '@mui/material'
import { FormControl } from '@mui/material';



const NewRoomView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleSubmit = (event) => {
        event.preventDefault();
        // API Create new room
    };
    
  return (
    <Box m="20px">
        <Header title="CREATE NEW ROOM" subtitle="Add a New Room To The Database"/>
        <Box>
        
            <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
                <FormControl required >
                    <TextField id="name" label="Room Name" variant="outlined" sx={{ width: "300px" }}/>
                </FormControl>
                <FormControl>
                    <TextField id="photo" label="Photo URL" variant="outlined" sx={{ width: "300px" }}/>
                </FormControl>
                <FormControl required>
                    <TextField id="desc" label="Room Description" variant="outlined" multiline={true} rows={3} sx={{ width: "500px"}}/>
                </FormControl>
                <Button variant="contained" color='secondary' sx={{ width: "150px" }}>Add New Room</Button>
            </Stack>
            </form>
        
        </Box>
    </Box>
  )
}

export default NewRoomView