import {Cajero} from './cajero';
import {Ventanilla} from './ventanilla';

export class AsignacionVentanilla {
    constructor(
        public ventanilla_id: number,
        public cajero_id: number,
        public activo: boolean,
        public id?: number,
        public ventanilla?: Ventanilla,
        public cajero?: Cajero
    ) {
    }
}
