import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HeaderStyles } from "./Header.styles";

export const Header = () => {
    return <HeaderStyles>
        <Link to="/users">
            <Button variant="contained">
                Users
            </Button>
        </Link>

        <Link to="/history">
            <Button variant="contained" color="secondary">
                History
            </Button>
        </Link>

    </HeaderStyles>
}