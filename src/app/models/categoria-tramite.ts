import {TipoTramite} from './tipo-tramite';

export class CategoriaTramite {
    constructor(
        public tipo_tramite_id: number,
        public descripcion: string,
        public duracion_horas: number,
        public id?: number,
        public tipo_tramite?: TipoTramite
    ) {
    }
}
