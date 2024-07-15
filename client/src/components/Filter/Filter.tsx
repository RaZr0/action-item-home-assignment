import { TextField } from "@mui/material"

type FilterProps = {
    initialValue : string;
    onChange: (value: string) => void
}

export const Filter = ({ onChange , initialValue }: FilterProps) => {
    return <TextField id="outlined-basic" label="filter users" variant="outlined" defaultValue={initialValue} onChange={(evt) => {
        onChange(evt.target.value);
    }} />
}