import { TextField } from "@mui/material"

type FilterProps = {
    onChange: (value: string) => void
}

export const Filter = ({ onChange }: FilterProps) => {
    return <TextField id="outlined-basic" label="filter users" variant="outlined" onChange={(evt) => {
        onChange(evt.target.value);
    }} />
}