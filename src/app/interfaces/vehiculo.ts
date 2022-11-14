export interface VehiculoI {
    patente:      string;
    marca:        string;
    modelo:       string;
    anio:         number;
    n_motor:      string;
    n_chasis:     string;
    createdAt?:    Date;
    updatedAt?:    Date;
    propietarios: Propietario[];
}

export interface Propietario {
    rut:              string;
    desc_propietario: string;
    direccion:        string;
    telefono:         string;
    createdAt?:        Date;
    updatedAt?:        Date;
}

export interface ApiResponse {
    vehiculos:VehiculoI[];
}

export interface VehiculosI {
    patente:   string;
    marca:     string;
    modelo:    string;
    anio:      number;
    n_motor:   string;
    n_chasis:  string;
    createdAt: Date;
    updatedAt: Date;
}
