import { Box, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText } from "@mui/material";
import React, { useState } from "react";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

export const MUICheckbox = () => {
    const [accept, setAccept] = useState<boolean>(false);
    const [skills, setSkills] = useState<string[]>([])

    console.log(accept);
    console.log({skills})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(e.target.checked);
    };

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const index = skills.indexOf(e.target.value)
      // kalau mau add tp belum ada di array skills
      if(index === -1) {
        setSkills([...skills, e.target.value])
      }
      // kalau remove
      else{
        setSkills(skills.filter(skill => skill !== e.target.value))
      }

    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and condiitons"
                    control={<Checkbox checked={accept} onChange={handleChange} />}
                ></FormControlLabel>
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                    checked={accept}
                    onChange={handleChange}
                ></Checkbox>
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={<Checkbox color="secondary" size="medium" value='html' checked={skills.includes('html')} onChange={handleSkillChange} />}
                        ></FormControlLabel>
                        <FormControlLabel
                            label="CSS"
                            control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />}
                        ></FormControlLabel>
                        <FormControlLabel
                            label="JavaScript"
                            control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                        ></FormControlLabel>
                    </FormGroup>
                <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};
