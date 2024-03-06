import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MUITextField = () => {
    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                {/* defaultnya outlined */}
                <TextField label="name" variant="outlined"></TextField>
                <TextField label="name" variant="standard"></TextField>
                <TextField label="name" variant="filled"></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='name' size="small" color="primary"></TextField>
                <TextField label='name' size="medium" color="secondary"></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                {/* kalau tidak ada value di input form ini, display error */}
            <TextField label='Form Input' required value={value} 
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? 'Required' : 'Do not share your password w anyone'}></TextField>
                <TextField label='Form Input' required helperText="Don't fall for someone just bc their aim is good!"></TextField>
                <TextField label='Form Input' required type="password"></TextField>
                <TextField label='read only' InputProps= {{readOnly: true}}></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label="Amount"
                InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}>
                </TextField>

                <TextField label="Weight"
                InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}>
                </TextField>
            </Stack>
        </Stack>
    );
};

export default MUITextField;
