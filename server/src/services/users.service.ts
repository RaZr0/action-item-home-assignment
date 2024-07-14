
import { getUsers, UserModel, writeUsers } from '../models/user.model'


async function getAll() {
    return getUsers();
}


async function add(user: UserModel): Promise<void> {
    const users = await getUsers();
    users.push(user);
    await writeUsers(users);
}



async function update(user: UserModel): Promise<void> {
    const users = await getUsers();
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex === -1) {
        throw 'not found'
    }

    users[userIndex] = user;
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