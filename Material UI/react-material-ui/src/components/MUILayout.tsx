import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

/* Paper digunakan untuk memberikan padding, elevation dgn menggunakan shadow, 
white bg.  Digunakan untuk memberikan batasan pada section yang kita miliki*/
export const MUILayout = () => {
    return (
        <Paper sx={{ padding: '32px' }} elevation={4}>
            <Stack
                sx={{ border: "1px solid" }}
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        height: "100px",
                        width: "100px",
                        padding: "16px",
                        ":hover": {
                            backgroundColor: "primary.light",
                        },
                    }}
                >
                    Codevolution
                </Box>
                <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
                    Second Box
                </Box>
            </Stack>
            {/* Grid menggunakan flexbox module dan mmeiliki 12 columns in total */}
            <Grid container margin={4}>
                <Grid item>
                    <Box bgcolor="primary.light" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item>
                    <Box bgcolor="primary.light" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item>
                    <Box bgcolor="primary.light" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item>
                    <Box bgcolor="primary.light" p={2}>
                        Item 4
                    </Box>
                </Grid>
                <Grid item>
                    <Box bgcolor="primary.light" p={2}>
                        Item 5
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};
