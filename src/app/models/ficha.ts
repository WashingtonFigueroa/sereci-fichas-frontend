import {Categoria} from './categoria';

export class Ficha {
    constructor(
        public numero: string,
        public estado_ficha: 'espera' | 'selectivo' | 'expiracion' | 'ventanilla' | 'atendido',
        public categoria_id: number,
        public id?: number,
        public categoria?: Categoria
    ) {
    }
}
