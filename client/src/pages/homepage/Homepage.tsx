import { Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { getRandomUsers } from "../../services/random-user.service"
import { usersStore } from "../../store/users.store"
import { HomepageStyles } from "./Homepage.styles"

export const Homepage = () => {
    const navigate = useNavigate();

    async function onFetch() {
        try {
            const res = await getRandomUsers(10);
            usersStore.setUsers(res.data.results);
            navigate('users');
        }
        catch (err) {

        }
    }

    return <HomepageStyles>
        <Button variant="contained" onClick={onFetch}>
            Fetch
        </Button>

        <Link to="/history">
            <Button variant="contained" color="secondary">
                History
            </Button>
        </Link>

    </HomepageStyles >
}