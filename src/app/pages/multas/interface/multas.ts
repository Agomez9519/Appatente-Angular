export interface MultasI {
    id:number;
    descripcion:string;
    estaPagada:boolean;
    descJuzgado:string;
}

export interface Multas {
    Search: MultasI[];
}