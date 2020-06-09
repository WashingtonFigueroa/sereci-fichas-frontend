import {User} from './user';

export class Cajero {
    constructor(
        public user_id: number,
        public id?: number,
        public user?: User
    ) {
    }
}
