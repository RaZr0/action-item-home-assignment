import * as fs from 'fs/promises';
import * as path from 'path';
const usersDbJsonPath = '../../db/users.json';

export type UserModel = {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    gender: string;
    imageUrl: string,
    thumbnailUrl: string,
    dateOfBirth: string,
    address: {
        street: string,
        city: string,
        state: string
    },
    contact: {
        email: string,
        phone: string
    }
}


export async function getUsers(): Promise<UserModel[]> {
    try {
        const filePath = path.join(__dirname, usersDbJsonPath);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data;

    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw error;
    }
}


export async function writeUsers(users: UserModel[]) {
    try {
        const filePath = path.join(__dirname, usersDbJsonPath);
        await fs.writeFile(filePath, JSON.stringify(users), 'utf-8');
    }
    catch (err) {
        console.error('Error writing to JSON file:', err);
        throw err;
    }
}
