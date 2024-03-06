import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import React, { useState } from "react";

function MUIButtons() {
    const [format, setFormat] = useState<string | null>(null);

    console.log({ format });

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
        setFormat(updatedFormat);
    };

    return (
        <div>
            <Stack spacing={4}>
                <Stack spacing={3} direction="row">
                    <Button variant="text" href="https://google.com" target="_blank">
                        Text
                    </Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">outlined</Button>
                </Stack>

                <Stack spacing={3} direction="row">
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" color="error" disableElevation>
                        Error
                    </Button>
                    <Button variant="contained" color="warning">
                        Warning
                    </Button>
                    <Button variant="contained" color="info">
                        Info
                    </Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                </Stack>

                <Stack display="block" spacing={3} direction="row">
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </Stack>

                <Stack display="block" spacing={3} direction="row">
                    <IconButton aria-label="dark" color="success" size="medium">
                        <ModeNightIcon></ModeNightIcon>
                    </IconButton>
                    <Button variant="contained" startIcon={<ModeNightIcon />} disableRipple>
                        Dark
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ModeNightIcon />}
                        disableElevation
                        onClick={() => alert("Dark button clicked")}
                    >
                        Dark
                    </Button>
                </Stack>

                <Stack direction="row">
                    <ButtonGroup
                        aria-label="alignment-button-group"
                        variant="contained"
                        size="small"
                        color="warning"
                        orientation="vertical"
                    >
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction="row">
                    <ToggleButtonGroup
                        aria-label="text-formatting"
                        value={format}
                        onChange={handleFormatChange}
                        color="primary"
                        orientation="vertical"
                        exclusive
                    >
                        <ToggleButton value="bold" aria-label="bold">
                            <FormatBold></FormatBold>
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <FormatItalic></FormatItalic>
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label="underlined">
                            <FormatUnderlined></FormatUnderlined>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    );
}

export default MUIButtons;
