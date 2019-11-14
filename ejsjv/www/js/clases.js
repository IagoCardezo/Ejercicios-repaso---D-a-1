"use strict";

/* 
Ejemplo de unha clase 
Class Animal {

This é unha forma de referirse á propia clase sin mencionala.
(Dentro de ela misma non se pode mencionar a unha clase)

    constructor(name){
this.name = name
this.color = 'red'
this.sonido = sonido
    }
Dentro de unha clase non é necesario definir variables 
(non fai falta const ou let)



}

Instanciar unha clase :
const myAnimal = new Animal(propiedades)

*/

//Ejemplo

class Animal {
  constructor(name, legs, sound) {
    this.name = name;
    this.legs = legs;
    this.sound = sound;
    this.color = "red";
  }

  static showColor() {
    return `El animal es de color ${this.color}.`;
  }
  //Metodo, dentro dunha clase tampouco é necesário poñer 'function'

  elAnimalDice() {
    return `Hola soy ${this.name} tengo ${this.legs} patas y digo ${this.sound}`;
  }
}

console.log(Animal.showColor());

const myAnimal = new Animal("Paco", 4, "guau");
console.log(myAnimal.elAnimalDice());

//Extender de unha clase

class Cat extends Animal {
  constructor(name, legs, sound, whiskers) {
    // Super é para que herede as propiedades da clase pai
    super(name, legs, sound);
    this.whiskers = whiskers;
  }
}

const newCat = new Cat("Carbón", 4, "miau", true);

console.log(newCat);
