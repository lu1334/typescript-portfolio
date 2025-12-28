 /* 🧩 EJERCICIO 4: Transformación de datos
Contexto:
Estás trabajando con una API que devuelve los 
datos de empleados de forma muy detallada, 
pero tu componente de frontend solo necesita un resumen simple. */


type EmployeeAPI = {
  personal: {
    name: string
    age: number
    contact: {
      email: string
      phone: string
    }
  }
  job: {
    title: string
    department: string
    location: {
      country: string
      city: string
    }
  }
}

type EmployeeCard = {
  fullName: EmployeeAPI["personal"]["name"]      // viene de personal.name
  email: EmployeeAPI["personal"]["contact"]["email"]           // viene de personal.contact.email
  position:EmployeeAPI["job"]["title"]        // viene de job.title
  office: `${EmployeeAPI["job"]["location"]["city"]},${EmployeeAPI["job"]["location"]["country"]}`        // del tipo `${city}, ${country}`
}

