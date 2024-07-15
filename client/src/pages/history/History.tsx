import { useQuery } from "react-query";
import { getUsers } from "../../services/users.service";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Filter } from "../../components/Filter/Filter";
import { UsersList } from "../../components/UsersList/UsersList";
import { GetUser, User } from "../../interfaces/user.interface";
import { UserDetails } from "../user/User";
import { Header } from "../../components/layout/Header/Header";
import { usersStore } from "../../store/users.store";
import { observer } from "mobx-react-lite";

export const History = observer(() => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ['history'], queryFn: async () => {
            const res = await getUsers();
            return res.data;
        },
        cacheTime: 0
    })

    const [filteredUsers, setFilteredUsers] = useState<User[]>();

    useEffect(() => {
        if (data) {
            filterUsers(usersStore.historyFilter);
        }
    }, [data])


    function onFilterChange(value: string) {
        usersStore.setHistoryFilter(value);
        filterUsers(value);
    }

    function filterUsers(value: string) {
        const valueLower = value.toLocaleLowerCase();
        setFilteredUsers(
            convertToUser((data as GetUser[]).filter((u: GetUser) => !valueLower ||
                `${u.firstName} ${u.lastName}`.toLocaleLowerCase().includes(valueLower) ||
                u.address.state.toLocaleLowerCase().includes(valueLower)))
        );
    }

    function convertToUser(data: GetUser[]) {
        return data.map(u => {
            return {
                id: u.id,
                thumbnailUrl: u.thumbnailUrl,
                title: u.title,
                firstName: u.firstName,
                lastName: u.lastName,
                gender: u.gender,
                country: u.address.state,
                phoneNumber: u.contact.phone,
                email: u.contact.email
            }
        })
    }

    function onUserClick(user: User) {
        const fullUser = data?.find(u => u.id === user.id) as GetUser;
        const userDetails: UserDetails = {
            address: {
                city: fullUser?.address.city || '',
                state: fullUser?.address.state || '',
                street: fullUser?.address.street || ''
            },
            contact: {
                email: user.email,
                phone: user.phoneNumber
            },
            dateOfBirth: fullUser?.dateOfBirth || '',
            imageUrl: fullUser?.imageUrl || '',
            title: fullUser.title,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender
        }
        navigate(`/user/${fullUser.id}`, { state: userDetails });
    }

    return <div>
        <Header />
        {isLoading ? 'Loading...' :
            <>
                <Filter onChange={onFilterChange} initialValue={usersStore.historyFilter} />
                <UsersList users={filteredUsers || []} onUserClick={onUserClick} />
            </>
        }
    </div>
})