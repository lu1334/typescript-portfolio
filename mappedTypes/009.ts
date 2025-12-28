interface Usuario9 {
  id: number;
  nombre: string;
  activo: boolean;
  perfil: {
    ciudad: string;
    edad: number;
    preferencias: {
      color: string;
      suscrito: boolean;
    };
  };
}

type TransformadorProfundo<T> = {
    [K in keyof T as T[K] extends string?`txt_${Extract<K,string>}`:
    T[K] extends number?`num_${Extract<K,string>}`:
    T[K] extends boolean?`bool_${Extract<K,string>}`: K]
    // lo que sigue aqui debajo ya es el valor...
     : T[K] extends object? TransformadorProfundo<T[K]> : T[K]
}

type Resultado9 = TransformadorProfundo<Usuario9>


const usuario9: Usuario9 = {
    id: 1,
    nombre: "Sandy",
    activo: true,
    perfil: {
        ciudad: "Barcelona",
        edad: 42,
        preferencias: {
            color: "azul",
            suscrito: false,
        },
    },
};

function function9<T>(obj:T):TransformadorProfundo<T>{
    return {} as TransformadorProfundo<T>
}
console.log(function9(usuario9))