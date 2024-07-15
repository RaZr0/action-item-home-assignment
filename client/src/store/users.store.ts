import { makeAutoObservable } from "mobx";
import { GetUser, User } from "../interfaces/user.interface";
import { Result } from "../interfaces/random-user.interface";

class UsersStore {
    users: Result[] = [];
    usersFilter: string = '';
    historyFilter: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users: Result[]) {
        this.users = users;
    }

    setUsersFilter(filter: string) {
        this.usersFilter = filter;
    }

    setHistoryFilter(filter: string) {
        this.historyFilter = filter;
    }
}

export const usersStore = new UsersStore();