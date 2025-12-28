type ApiExamResult = {
  studentId: string;
  scores: {
    [subject: string]: number;
  };
};

type TransformedExamResult = {
  id: ApiExamResult["studentId"];
  subjects: {
    name: ApiExamResult["scores"];
    score: ApiExamResult["scores"];
  }[];
};

/* 🧩 Ejercicio 9: Consolidar roles de usuario */

type ApiUserRole = {
  userId: number;
  role: string;
};

const userRoles: ApiUserRole[] = [
  { userId: 1, role: "admin" },
  { userId: 2, role: "editor" },
  { userId: 1, role: "viewer" },
  { userId: 3, role: "editor" },
];

type ConsolidatedRoles = {
  [userId: number]: string[];
};

function consolidarRoles(arr:ApiUserRole[]):ConsolidatedRoles{

   const agendaRoles:ConsolidatedRoles = {}
   arr.forEach(usu=>{
    const usuId = usu.userId
    if(!agendaRoles[usuId]){
         agendaRoles[usuId]=[]
       }
      agendaRoles[usuId].push(usu.role)

   })
   return agendaRoles
    //  return arr.reduce((acc,usu)=>{
    //   const idUsu = usu.userId
    //   if(!acc[idUsu]){
    //     acc[idUsu]=[]
    //   }
    //   acc[idUsu].push(usu.role)
    //   return acc
    //  },{} as ConsolidatedRoles)
}

console.log(consolidarRoles(userRoles))