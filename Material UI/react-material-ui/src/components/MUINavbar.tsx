import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material"
import { CatchingPokemon } from "@mui/icons-material"
import React, { useState } from "react"

function MUINavbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
                <Button color="inherit" id="resources-button" onClick={handleClick} aria-controls={open ? 'resources-menu' : undefined}
                aria-haspopup={true} aria-expanded={open ? true : undefined}>Resources</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{
              'aria-labelledby': 'resources-button'
            }} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Blog</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MUINavbar