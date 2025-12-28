/* 📦 Ejercicio 16: Agrupar archivos por extensión */
type File2 = {
  name: string; // ejemplo: "report.pdf", "photo.jpg"
  size: number; // en KB
};

const files: File2[] = [
  { name: "report.pdf", size: 200 },
  { name: "photo.jpg", size: 1500 },
  { name: "notes.txt", size: 20 },
  { name: "presentation.pdf", size: 300 },
  { name: "image.jpg", size: 1600 },
];

type Retorno2 = Record<string,string[]>
    
function AgruparPorExtension(arr:File2[]):Retorno2{
    return arr.reduce((acc,file)=>{
        const ext = file.name.slice(-3)
        if(!acc[ext]){
            acc[ext]= []
        }
        acc[ext].push(file.name)
        return acc
    },{} as Retorno2)
}
console.log(AgruparPorExtension(files))