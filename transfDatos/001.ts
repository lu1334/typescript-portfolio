/* 🧩 EJERCICIO 1: Transformación de datos

Contexto:

Estás trabajando en una API de reservas de vuelos.
 El backend te devuelve un tipo FlightResponse con todos los datos de un vuelo,
  pero el frontend solo necesita un resumen compacto para mostrar en una lista.

Objetivo:

Crea un tipo FlightSummary a partir de FlightResponse,
 que tenga solo los campos necesarios y con una estructura diferente. */


 type FlightResponse = {
  id: string
  departure: {
    airport: string
    time: string
  }
  arrival: {
    airport: string
    time: string
  }
  aircraft: {
    model: string
    registration: string
  }
  status: 'scheduled' | 'delayed' | 'cancelled'
}

// type FlightSummary = {
//   code: string         // debe venir de `id`
//   route: string        // debe ser del tipo `${origen} → ${destino}`
//   schedule: {
//     from: string       // hora de salida
//     to: string         // hora de llegada
//   }
// }

type FlightSummary = {
    code:FlightResponse["id"]
    route:`${FlightResponse['departure']['airport']} → ${FlightResponse['arrival']['airport']}`
    schedule: {
        from:FlightResponse["departure"]["time"]
        to:FlightResponse["arrival"]["time"]
    }
}