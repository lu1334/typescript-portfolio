/* 🎯 Mini reto práctico (Bloque 3 - Ejercicio 3):

👉🏼 Queremos crear una clase CuentaBancaria que:
	1.	Tenga un titular que no se puede cambiar (readonly)
	2.	Tenga un saldo, pero que sea privado
	3.	Solo se pueda acceder al saldo usando:
	•	un método verSaldo()
	•	un método depositar(cantidad)
	•	un método retirar(cantidad) que:
	•	solo permita retirar si hay suficiente saldo
	•	y devuelva un mensaje según el resultado */

export class CuentaBancaria {
    readonly titular:string
    private saldo:number
    constructor(titular:string,saldo:number){
        this.titular = titular
        this.saldo = saldo
    }
    verSaldo():number{
        return this.saldo
    }

    depositarCantidad(cantidad:number):string{
       this.saldo += cantidad
       return `Su operacion se ha realizado con exito, su saldo actual es de ${this.saldo}€`
    }

    retirar(cantidad:number):string{
        if(this.saldo >= cantidad){
            this.saldo -= cantidad
            return `cantidad ${cantidad} retirada con exito, su saldo actual es de ${this.saldo}`
        }
        else {
            return `No hay  suficiente saldo en la cuenta`
        }
    }
}

 export const miCuentaBancaria = new CuentaBancaria("sandy",100)
console.log(miCuentaBancaria.depositarCantidad(20))
// console.log(miCuentaBancaria.retirar(20))
// 