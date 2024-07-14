import axios from "axios";
import { GetRandomUserResponse } from "../interfaces/random-user.interface";

export const getRandomUsers = async (amount : number) => {
    const response = await axios.get<GetRandomUserResponse>(
        `https://randomuser.me/api/?results=${amount}`,
    );
    return response;
};