import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"
import { CatchingPokemon } from "@mui/icons-material"

function MUINavbar() {
  return (
    <AppBar position="static">
        {/* toolbar menambahkan padding pada item */}
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <CatchingPokemon></CatchingPokemon>
            </IconButton>
            <Typography sx={{ flexGrow: 1 }} variant="h6" component='div'>POKEMON APP</Typography>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Login</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MUINavbar