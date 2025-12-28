/* 🧩 Ejercicio 1.6 – Renombrar claves dinámicamente con as */

interface Persona1_6 {
  nombre: string;
  edad: number;
  activo: boolean;
}

type RenombrarPorTipo<T> = {
  [K in keyof T as 
    T[K] extends string ? `txt_${Extract<K, string>}` :
    T[K] extends number ? `num_${Extract<K, string>}` :
    T[K] extends boolean ? `bol_${Extract<K, string>}` :
    K
  ]: T[K];
};