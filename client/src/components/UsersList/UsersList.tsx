import { User } from "../../interfaces/user.interface";
import { UserCard } from "./UserCard/UserCard";
import { UsersListStyles } from "./UsersList.styles";

interface UsersListProps {
    users: User[];
    onUserClick: (user: User) => void;
}

export const UsersList = ({ users, onUserClick }: UsersListProps) => {
    return <UsersListStyles>
        {users.map((u) => {
            return <li key={u.id} onClick={() => onUserClick(u)}>
                <UserCard key={u.id} {...u} />
            </li>
        })}
    </UsersListStyles>
}