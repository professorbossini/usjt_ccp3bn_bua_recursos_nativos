import { ADD_LUGAR, LISTA_LUGARES } from "./lugares-actions";
import Lugar from '../modelo/Lugar'
const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case LISTA_LUGARES:
            return {
                lugares: action.lugares.map(l => new Lugar(l.id.toString(), l.nomeLugar, l.imagem))
            }
        case ADD_LUGAR:
            const l = new Lugar(action.dadosLugar.id.toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagem);
            return {
                lugares: estado.lugares.concat(l)
            };
        default:
            return estado;
    }
}