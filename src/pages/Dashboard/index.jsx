import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN DASHBOARD" subtitle="Selamat Datang!"/>
      </Box>
    </Box >
  )
}

export default index