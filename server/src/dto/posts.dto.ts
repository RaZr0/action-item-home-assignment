import { UserModel } from "../models/user.model";

export type AddPostDto = {
    userId: number;
    content: string;
    imageUrl: string;
}


export type EditPostDto = {
    content: string;
    imageUrl?: string;
}


export type PostDto = {
    id: number;
    user: UserModel;
    date: string;
    content: string;
    imageUrl: string;
    likes: number[];
}

