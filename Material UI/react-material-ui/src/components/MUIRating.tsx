import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"

export const MUIRating = () => {
    const[value, setValue] = useState<number | null>(null)

    console.log({value})

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null ) => {
        setValue(newValue)
    }
  return (
    <Stack spacing={2}>
        {/* bisa set icon dan empty icon */}
        <Rating value={value} onChange={handleChange} precision={0.5}></Rating>
    </Stack>
  )
}
