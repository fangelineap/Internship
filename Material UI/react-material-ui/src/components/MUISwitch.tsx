import { Box, FormControlLabel, Switch } from "@mui/material"
import React, { useState } from "react"

const MUISwitch = () => {
    const [checked, setChecked] = useState(false)

    console.log({checked})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

  return (
    <Box>
        <FormControlLabel label="dark mode" control={<Switch checked={checked} onChange={handleChange} />}></FormControlLabel>
    </Box>
  )
}

export default MUISwitch