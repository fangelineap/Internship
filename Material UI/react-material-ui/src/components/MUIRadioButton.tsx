import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import React, { useState } from "react"

const MUIRadioButton = () => {
    const [value, setValue] = useState('')

    console.log({value})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as string)
    }

  return (
    <Box>
        <FormControl error>
            <FormLabel id="job-experience-group-label">
                Years of experience
            </FormLabel>
            <RadioGroup name="job-experience-group" aria-label="job-experience-group-label"
            value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size="medium" color="secondary"></Radio>} label="0-2" value={'0-2'}></FormControlLabel>
                <FormControlLabel control={<Radio></Radio>} label="3-5" value={'3-5'}></FormControlLabel>
                <FormControlLabel control={<Radio></Radio>} label="6-10" value={'6-10'}></FormControlLabel>
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MUIRadioButton