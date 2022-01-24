import { TipoAlerta } from "./tipo-alerta.enum";

export class Alerta {
    tipo!: TipoAlerta;
    mensaje!: string;
    tiempo: any;
}
