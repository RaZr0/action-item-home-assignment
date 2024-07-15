
import { AddUserDto } from '../dtos/add-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { getUsers, writeUsers } from '../models/user.model';


async function getAll() {
    return getUsers();
}


async function add(user: AddUserDto): Promise<void> {
    const users = await getUsers();
    if (!!users.find(u => u.id === user.id)) {
        throw 'user exists';
    }

    users.push({
        ...user
    });

    await writeUsers(users);
}



async function update(id: string, user: UpdateUserDto): Promise<void> {
    const users = await getUsers();
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        throw 'not found'
    }

    users[userIndex] = {
        ...users[userIndex],
        ...user
    };
    await writeUsers(users);
}



async function remove(id: string): Promise<void> {
    const users = await getUsers();
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        throw 'not found';
    }

    users.splice(userIndex, 1)[0];
    await writeUsers(users);
}



export default {
    getAll,
    add,
    update,
    remove
}