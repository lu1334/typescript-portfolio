/* 🔹 BLOQUE 1  🚀 Ejercicio 1:

Crea una función que reciba un dato que puede ser string, number o boolean.
	•	Si es string, devuelve el mismo string con una exclamación al final.
	•	Si es number, devuelve el triple del número.
	•	Si es boolean, devuelve el valor opuesto (true → false, false → true).
 */

function mensajeSegun(dato: string | number | boolean) {
  switch (typeof dato) {
    case "string":
      return `${dato}!!!`;

    case "number":
      return dato * 3;

    case "boolean":
      return !dato;
  }
}

const respuesta1 = mensajeSegun(true);
// console.log(respuesta1)

/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* 🔹 BLOQUE 1 — Ejercicio 2: Narrowing con estructuras

Crea una función que reciba un argumento que puede ser un usuario o un admin.
Cada uno tiene propiedades distintas.
	•	Si es usuario, devuelve un mensaje personalizado con su nombre.
	•	Si es admin, devuelve un mensaje indicando su nivel de acceso.

📝 Define tú mismo la estructura de cada tipo y haz que la función
 se comporte de forma distinta según el caso. */

type Usuario2 = {
  nombre: string;
  edad: number;
  sexo: string;
};
type Admin2 = {
  nombre: string;
  clave: string;
};

type DatoEntrada = Usuario2 | Admin2;

function AccesoSegun(datoAcceso: DatoEntrada): string {
  return "sexo" in datoAcceso
    ? `Bienvenido  ${datoAcceso.nombre}`
    : `Acceso permitido  ${datoAcceso.nombre}`;
}

const Usuario2 = {
  nombre: "sandy",
  edad: 42,
  sexo: "masculino",
};
const Admin2 = {
  nombre: "yude",
  clave: "cubanita",
};
const respuesta2: string = AccesoSegun(Admin2);
// console.log(respuesta2)

/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* 🚀 BLOQUE 1 — Ejercicio 3: Narrowing con estructuras + trampa de tipos

Define dos tipos: Empleado y Invitado.
Ambos tienen un campo en común llamado nombre, pero las demás propiedades son distintas.

La función debe recibir un dato que puede ser un Empleado o un Invitado.
	•	Si es un Empleado, debe devolver: "Empleado: [nombre], puesto: [puesto]"
	•	Si es un Invitado, debe devolver: "Invitado: [nombre], motivo: [motivoVisita]"

🎯 El truco: como ambos tienen nombre, no puedes usar in con nombre para distinguirlos. */

type Empleado3 = {
  readonly tipo: "empleado3";
  nombre: string;
  edad: number;
  puesto: string;
};
type Invitado3 = {
  readonly tipo: "invitado3";
  nombre: string;
  ocupacion: boolean;
  motivoVisita: string;
};

type tipoEmpleadoInvitado = Empleado3 | Invitado3;

function mensajeSegunTipo(objEmpInv: tipoEmpleadoInvitado): string {
  return objEmpInv.tipo === "empleado3"
    ? `Empleado: ${objEmpInv.nombre}, puesto: ${objEmpInv.puesto}`
    : `Invitado: ${objEmpInv.nombre}, motivo: ${objEmpInv.motivoVisita}`;
}

const empleadoEjemplo: Empleado3 = {
  tipo: "empleado3",
  nombre: "sandy",
  edad: 42,
  puesto: "Camarero"
};
const invitadoEjemplo: Invitado3 = {
  tipo: "invitado3",
  nombre: "yude",
  ocupacion: true,
  motivoVisita: "Inspeccionar"
};


console.log(mensajeSegunTipo(invitadoEjemplo))