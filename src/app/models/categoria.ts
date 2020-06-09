export class Categoria {
    constructor(
        public descripcion: string,
        public acronimo: string,
        public prioridad: number,
        public id?: number
    ) {
    }
}
