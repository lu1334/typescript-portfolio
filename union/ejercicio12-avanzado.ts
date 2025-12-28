/* ✅ Ejercicio 22 – Acciones según tipo de usuario (nivel medio-avanzado)
	1.	Usa el mismo type Usuario21 del ejercicio anterior:
	•	Admin, Moderador y Visitante21 con la propiedad tipo
	2.	Crea una función llamada ejecutarAccion(usuario: Usuario21): void que:
	•	Si es admin, muestre en consola: "Acceso total para ${nombre}"
	•	Si es moderador, muestre: "Moderador ${nombre} puede editar ${secciones} secciones"
	•	Si es visitante, muestre: "Visitante ${nombre} no tiene permisos administrativos"
	3.	Usa un array con al menos un usuario de cada tipo y recórrelo con forEach 
        para ejecutar la función ejecutarAccion() 
        sobre cada uno.
    */

type Admin22 = {
  tipo: "admin";
  nombre: string;
  permisos: string[];
};

type Moderador22 = {
  tipo: "moderador";
  nombre: string;
  secciones: number;
};

type Visitante22 = {
  tipo: "visitante";
  nombre: string;
  registro: boolean;
};

type Usuario22 = Admin22 | Moderador22 | Visitante22;

function ejecutarAccion(usuario: Usuario22): void {
  switch (usuario.tipo) {
    case "admin":
      console.log(`Acceso total para ${usuario.nombre}`); // code block
      break;
    case "moderador":
      console.log(
        `Moderador ${usuario.nombre} puede editar ${usuario.secciones} secciones`
      ); // code block
      break;
    case "visitante":
      console.log(
        `Visitante ${usuario.nombre} no tiene permisos administrativos`
      ); // code block
      break;
    
  }
}

const admin22:Admin22= {
    tipo: "admin",
    nombre:"sandy",
    permisos:["permitido","activo"]
}


const moderador22:Moderador22 = {
    tipo: "moderador",
    nombre:"yude",
    secciones:25
}

const visitante22:Visitante22 = {
    tipo:"visitante",
    nombre:"Laia",
    registro:true
}

const arrayDeUsuarios22:Usuario22[] = [admin22,moderador22,visitante22]

// arrayDeUsuarios22.forEach(usuario=>ejecutarAccion(usuario))


 /* ✅ Ejercicio 23 – Constantes de configuración
	1.	Crea un objeto llamado config con estas propiedades:
	•	modo: "oscuro" o "claro"
	•	lenguaje: "es" o "en"
	•	version: número
	2.	Declara el objeto usando as const.
	3.	Crea una función llamada leerConfig que reciba ese objeto y devuelva un mensaje como:
	•	"Modo actual: oscuro | Idioma: es | Versión: 2"
	4.	Intenta cambiar el valor de modo fuera de la función (fuera del config).
¿Qué pasa?
 */

const config = {
    modo:"oscuro",
    lenguage:"en",
    version:2
}as const

function leerConfig(objconfig:typeof config):string{
    return `Modo actual:${objconfig.modo} | idioma: ${objconfig.lenguage} | version: ${objconfig.version}`
}


// console.log(leerConfig(config))


/* 🧪 EJERCICIO 24 — readonly arrays y función de listado

Practicamos tipos, arrays inmutables y formato de strings.

✅ Instrucciones:
	1.	Define un type llamado UsuarioSimple con:
	•	nombre: string
	•	edad: number
	2.	Crea un array llamado usuarios con varios objetos UsuarioSimple, y haz que sea readonly.
	3.	Crea una función listarUsuarios que reciba ese array y devuelva este string:
            Usuarios registrados:
        - Sandy (43 años)
        - Yude (40 años) */


type UsuarioSimple = {
    nombre:string
    edad:number
}



const usuarioSimple1:UsuarioSimple = {
    nombre: "sandy",
    edad:42
}

const usuarioSimple2:UsuarioSimple = {
    nombre: "yude",
    edad:35
}
const usuarioSimple3:UsuarioSimple = {
    nombre: "Laia",
    edad:10
}

const arrayUsuariosSimples:UsuarioSimple[]= [usuarioSimple1,usuarioSimple2,usuarioSimple3] as const

function listarUsuarios(arrayUsuariosSimples:UsuarioSimple[] ):string[]{
    const nuevoArray = arrayUsuariosSimples.map(usuario=>`Usuarios registrados: -${usuario.nombre}(${usuario.edad} años)`)
    return nuevoArray
}
console.log(listarUsuarios(arrayUsuariosSimples))