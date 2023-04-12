import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFile() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');

  return (
    <div>
      <TextField
        label="Full Name"
        value={fullName}
        id = 'fullName'
        margin='normal'
        varient='outlined'
        autoFocus
        required
        fullWidth

        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        id = 'email'
        margin='normal'
        varient='outlined'
        fullWidth
        required
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Address"
        value={address}
        id = 'address'
        margin = 'normal'
        varient = 'outlined'
        fullWidth
        required
        autoFocus
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
 
    
  );
}
