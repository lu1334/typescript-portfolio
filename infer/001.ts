type Usuario1 = { id: number; nombre: string };

type Datos1 = Promise<Usuario1[]>;

type TipoElemento<T> = T extends Promise< (infer A)[]>?A:T

type Resultado1 = TipoElemento<Datos1>; // Resultado debe ser Usuario

const usuario1 : Resultado1 = {id:3,nombre:"dan"}