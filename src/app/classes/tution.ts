import { User } from './user';

export interface Tution {
    tutionId: number,
    tutionName: string,
    teacher:User,
    teacherId: number,
    locationLongitude: number,
    locationLatitude: number,
    listOfClasses: string,
    accepted: boolean
}
