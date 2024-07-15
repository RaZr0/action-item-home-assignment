import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Filter } from "../../components/Filter/Filter"
import { UsersList } from "../../components/UsersList/UsersList"
import { Result } from "../../interfaces/random-user.interface"
import { User } from "../../interfaces/user.interface"
import { usersStore } from "../../store/users.store"
import { UserDetails } from "../user/User"
import { Header } from "../../components/layout/Header/Header"

export const Users = observer(() => {
    const navigate = useNavigate();

    const [filteredUsers, setFilteredUsers] = useState<User[]>();

    useEffect(() => {
        filterUsers(usersStore.usersFilter);
    }, [usersStore.users])


    function onFilterChange(value: string) {
        usersStore.setUsersFilter(value);
        filterUsers(value);
    }

    function filterUsers(value : string){
        const valueLower = value.toLocaleLowerCase();
        setFilteredUsers(
            convertToUser(usersStore.users.filter((u: Result) => !valueLower ||
                `${u.name.first.toLocaleLowerCase()} ${u.name.last.toLocaleLowerCase()}`.includes(valueLower) ||
                u.location.country.toLocaleLowerCase().includes(valueLower)))
        );
    }


    function convertToUser(data: Result[]) {
        return data.map(u => {
            return {
                id: u.login.uuid,
                thumbnailUrl: u.picture.thumbnail,
                title: u.name.title,
                firstName: u.name.first,
                lastName: u.name.last,
                gender: u.gender,
                country: u.location.country,
                phoneNumber: u.phone,
                email: u.email
            }
        })
    }

    function onUserClick(user: User) {
        const fullUser = usersStore.users.find(u => u.login.uuid === user.id);
        const userDetails: UserDetails = {
            id : fullUser?.login.uuid,
            address: {
                city: fullUser?.location.city || '',
                state: fullUser?.location.state || '',
                street: `${fullUser?.location.street.name} ${fullUser?.location.street.number}` || ''
            },
            contact: {
                email: user.email,
                phone: user.phoneNumber
            },
            dateOfBirth: fullUser?.dob.date || '',
            imageUrl: fullUser?.picture.large || '',
            title: fullUser?.name.title || '',
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender
        }
        navigate(`/user/new`, { state: userDetails });
    }

    return <div>
        <Header />
        <Filter onChange={onFilterChange} initialValue={usersStore.usersFilter}/>
        <UsersList users={filteredUsers || []} onUserClick={onUserClick} />
    </div>
})