export interface User {
    id: string;
    thumbnailUrl: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    country: string;
    phoneNumber: string;
    email: string;
}


export interface GetUser {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    gender: string,
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