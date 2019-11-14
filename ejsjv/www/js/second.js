"use strict";

//Time to buy & sell, Nº 121

// let price = [7, 1, 5, 3, 6, 4];

// const maxprofit = function(prices) {
//   let mayorLucro = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       //   console.log({ i, j, price_i: prices[i], price_j: prices[j] });
//       const lucro = prices[j] - prices[i];
//       //   if (lucro > mayorLucro) {
//       //     mayorLucro = lucro;
//       //   }

//       mayorLucro = Math.max(mayorLucro, lucro);
//     }
//   }
//   return mayorLucro;
// };

// console.log(maxprofit(price));

//#######################################################################################################

// Robot return to origin (dos complementários); Nº 657;

// let moves = "UDLUDR";

// const judgeCircle = function(moves) {
//   let up = 0;
//   let down = 0;
//   let left = 0;
//   let right = 0;

//   const splitMoves = moves.split("");
//   console.log(splitMoves);

//   for (const move of splitMoves) {
//     console.log(moves);
//     switch (move) {
//       case "U":
//         up++;
//         break;
//       case "D":
//         down++;
//         break;
//       case "L":
//         left++;
//         break;
//       default:
//         right++;
//     }
//   }
//   const x = right - left;
//   const y = up - down;

//   if (x === 0 && y === 0) {
//     return true;
//   }
//   return false;
// };

// console.log(judgeCircle(moves));

//#######################################################################################################

class Robot {
  position = 0;
  array = 0;
  constructor(space) {
    this.space = space;
  }

  moveLeft() {
    if (this.position === 0) {
      return false;
    }
    this.position--;
    return true;
  }

  moveRigth() {
    if (this.position === this.space[this.array].length - 1) {
      return false;
    }
    this.position++;
    return true;
  }

  moveDown() {
    if (this.array === this.space.length - 1) {
      return false;
    } else {
      this.array = this.array + 1;
    }
  }

  moveUp() {
    if (this.array === 0) {
      return false;
    } else {
      this.array = this.array - 1;
    }
  }

  currentPosition() {
    return this.space[this.array][this.position];
  }
}

const mySpace = [[1, 9, 5], [7, 6, 3], [6, 6, 8]];

//Aquí hai dous index i e j, Ej: myspace[i=0][j=2]
//Serían a primeira fila e a última columna(empeza en 0)

const myLittlePrettyRobot = new Robot(mySpace);

console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveRigth();
console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveLeft();
console.log(myLittlePrettyRobot.currentPosition());

myLittlePrettyRobot.moveRigth();
myLittlePrettyRobot.moveDown();
myLittlePrettyRobot.moveRigth();
console.log(myLittlePrettyRobot.currentPosition());
