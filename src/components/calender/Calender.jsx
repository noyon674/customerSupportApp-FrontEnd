import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Calender() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
      orientation="portrait" />
    </LocalizationProvider>
  )
}

export default Calender