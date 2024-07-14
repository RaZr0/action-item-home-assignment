export interface AddUserDto {
    id: string,
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