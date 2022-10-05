// El UserI representa el tipo de dato que se espera recibir en el login, 

export interface UserI {
    id?: number;
    username?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    role?: number;

}

//El UserResponseI representa el json de respuesta que enviara la api
export interface UserResponseI extends UserI {
    message:string;
    token:string;
    status:number;
}
