import axios from "axios";
import { GetUser } from "../interfaces/user.interface";
import { AddUserDto } from "../dtos/add-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";


export const getUsers = async () => {
  const response = await axios.get<GetUser[]>(
    "http://localhost:3001/users",
  );
  return response;
};


export const addUser = async (user: AddUserDto) => {
  const response = await axios.post(
    "http://localhost:3001/users",
    user
  );
  return response;
};


export const updateUser = async (id: string, user: UpdateUserDto) => {
  const response = await axios.patch(
    `http://localhost:3001/users/${id}`,
    user
  );
  return response;
};




export const deleteUser = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:3001/users/${id}`,
  );
  return response;
};