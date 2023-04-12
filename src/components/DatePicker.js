import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);

    } ;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date Of Birth"
       Pickervalue={selectedDate}
        onChange={handleDateChange}
        inputVariant="outlined"
        format="dd/MM/yyyy"
        margin ='normal'
        fullWidth
        required
        autoFocus

        
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}