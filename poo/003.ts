/* 🔷 BLOQUE 4 – Ejercicio 1: Herencia en clases

🎯 Objetivo:

Crear una subclase que extienda la lógica de CuentaBancaria y aplique nuevos métodos o comportamientos.

⸻

🧪 Tu reto:

Crea una clase llamada CuentaEmpresarial que:
	1.	✅ Extienda de CuentaBancaria
	2.	✅ En el constructor, además de titular y saldo, reciba un nuevo parámetro: empresa
	3.	✅ Tenga un método verInfo() que devuelva un string como:

Cuenta de Sandy - Empresa: CodeMaster SL - Saldo: 120€

	4.	✅ (Opcional si te animás) tenga un método transferir(cantidad: number,
     cuentaDestino: CuentaBancaria) que:
	•	quite saldo de esta cuenta
	•	y lo deposite en otra cuenta bancaria */

import { CuentaBancaria,miCuentaBancaria } from "./002";

class CuentaEmpresarial extends CuentaBancaria {
    empresa:string
    constructor(titular:string,saldo:number,empresa:string){
        super(titular,saldo)
        this.empresa = empresa
    }
   
    verInfo():string{
        return `Cuenta de ${this.titular} - Empresa : ${this.empresa} SL - Saldo: ${this.verSaldo()}`
    }

    transferirCuenta(cantidad:number,cuenta:CuentaBancaria){
        this.retirar(cantidad)
        cuenta.depositarCantidad(cantidad)
        return `Transferencia realizada con exito`
    }
} 


const cuentaEmpresarial = new CuentaEmpresarial("sandy",200,"Hoteles Globales")
cuentaEmpresarial.transferirCuenta(20,miCuentaBancaria)
console.log(miCuentaBancaria.verSaldo())
console.log(cuentaEmpresarial.verInfo())

