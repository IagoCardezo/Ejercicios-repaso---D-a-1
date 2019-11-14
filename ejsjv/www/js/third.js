"use strict";

class Banco {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.clientes = [];
  }
}
// CTRL + SHIFT + 7
/* CTRL + SHIFT + a */

class CuentaBancaria {
  constructor() {
    this.balance = 0;
    this.id = id;
  }
}

class Titular {
  constructor(nombre, genero, monedero) {
    this.nombre = nombre;
    this.genero = genero;
    this.monedero = monedero;
    this.id = Math.floor(Math.random() * 9999999999);
  }

  abrirCuentaBancaria(banco) {
    // 1. Generar un ID para la nueva cuenta bancaria.
    // 2. Acceder al array "clientes" del banco y almacenar el
    //    nombre y el ID de la cuenta bancaria del nuevo cliente
    // 3. Crear una nueva cuenta bancaria a la que debemos pasar
    //    el nuevo ID.
  }

  ingresarDinero(cantidad, cuenta) {
    // 1. Comprobar si en el monedero tenemos la cantidad que
    //    deseamos ingresar. De no ser asÃ, mostrar un mensaje
    //    que diga que no tenemos suficiente dinero en el
    //    monedero.
    // 2. Si tenemos suficiente dinero en el monedero, solo
    //    queda restar en el monedero la cantidad que vamos
    //    a ingresar.
    // 3. Acceder a la propiedad "balance" de la cuenta bancaria
    //    y sumar la cantidad a ingresar. Mostrar un mensaje de
    //    que el ingreso ha sido realizado.
  }

  retirarDinero(cantidad, cuenta) {
    // 1. Comprobar si en la propiedad "balance" de nuestra
    //    cuenta tenemos la cantidad que deseamos retirar.
    //    De no ser asÃ­, mostrar un mensaje que diga que
    //    no tenemos suficiente dinero en la cuenta.
    // 2. Si tenemos suficiente dinero en la cuenta, solo
    //    queda restar en el balance la cantidad que vamos
    //    a retirar.
    // 3. Acceder a la propiedad "monedero" del titular
    //    y sumar la cantidad retirada al monedero. Mostrar
    //    un mensaje de que el ingreso ha sido realizado.
  }

  mostrarSaldo(cuenta) {
    // 1. Acceder a la propiedad "balance" de la cuenta y
    //    mostrar un mensaje que nos indique nuestro saldo
    //    actual.
  }
}

const manolo = new Titular("Manolo", "hombre", 1200);

const pepe = new Titular.abrirCuentaBancaria(banco);
console.log(pepe);
