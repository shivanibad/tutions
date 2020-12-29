import { Role } from './role';

export interface User {
    userId: number,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    phoneNumber: number,
    userClass: number,
    email: string,
    password: string,
    imagePath: string,
    address: string,
    city: string,
    state: string,
    role: Role,
    verified: boolean
}
