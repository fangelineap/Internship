import { Typography } from "@mui/material"

const MUITypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        {/* gutter bottom default valuenya false, menambahkan jarak di bawah */}
        <Typography variant="h4" component='h1' gutterBottom>h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <Typography variant="subtitle1">sub 1</Typography>
        <Typography variant="subtitle2">sub 2</Typography>

        {/* default adalah body1 */}
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste odio necessitatibus. Dolores, aspernatur. Necessitatibus neque esse eos pariatur adipisci. Consequuntur qui veritatis ducimus magni nulla asperiores consequatur animi nesciunt.
        </Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi corrupti suscipit dolorem rerum ad, inventore non vero quia debitis minima et tempore cum iusto delectus consequuntur! Odit, cupiditate voluptatibus?
        </Typography>
    </div>
  )
}

export default MUITypography