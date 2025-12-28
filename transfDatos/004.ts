
type Course = {
  id: number;
  name: string;
};

type Enrollment = {
  student: string;
  courseId: number;
};

const courses: Course[] = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "React" },
];

const enrollments: Enrollment[] = [
  { student: "Ana", courseId: 1 },
  { student: "Luis", courseId: 2 },
  { student: "Ana", courseId: 2 },
];
type Transformed = {
  [student: string]: string[]; // nombres de cursos
};

function transformarStructuras(arrEnroll:Enrollment[],arrCourse:Course[]):Transformed{

            const arrTransf:Transformed = {}
            
        arrEnroll.forEach(stud=>{
            const nom = stud.student
            if(!arrTransf[nom]){
                arrTransf[nom]= []
            }
            arrCourse.forEach(curso=>{
                if(curso.id===stud.courseId){
                    arrTransf[nom].push(curso.name)
                }
            })
        })
        return arrTransf

}

console.log(transformarStructuras(enrollments,courses))