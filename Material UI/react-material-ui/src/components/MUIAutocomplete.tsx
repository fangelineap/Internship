import { Stack, Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

type skill = {
    id: number;
    label: string;
};

const skills = ["HTML", "CSS", "React", "TypeScript", "JavaScript"];

const skillsOpt = skills.map((skill, index) => {
    return { id: index + 1, label: skill };
});

export const MUIAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [kemampuan, setKemampuan] = useState<skill| null>(null)

    console.log({ value });
    console.log({kemampuan})

    return (
        <Stack spacing={2} width="250px">
            {/* only one skill */}
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                freeSolo //untuk memberikan user kebebasan memasukkan random string
            />

            {/* array of skills */}
            <Autocomplete
                options={skillsOpt}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                value={kemampuan}
                onChange={(event: any, newValue: skill | null) => setKemampuan(newValue)}
            />
        </Stack>
    );
};
