export class User {
    constructor(
        public cuenta: string,
        public nombres: string,
        public apellidos: string,
        public carnet: string,
        public celular: string,
        public tipo: string,
        public activo: boolean,
        public id?: number
    ) {
    }
}
