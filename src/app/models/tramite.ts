import {Ficha} from './ficha';
import {Cajero} from './cajero';

export class Tramite {
    constructor(
        public ficha_id: number,
        public categoria_tramite_id: number,
        public cajero_id: number,
        public estado: 'activo' | 'finalizado',
        public id?: number,
        public ficha?: Ficha,
        public cajero?: Cajero
    ) {
    }
}
