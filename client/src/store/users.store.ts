import { makeAutoObservable } from "mobx";
import { User } from "../interfaces/user.interface";
import { Result } from "../interfaces/random-user.interface";

class UsersStore {
    users: Result[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users : Result[]) {
        this.users = users;
    }

}

export const usersStore = new UsersStore();