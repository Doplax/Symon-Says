function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let cadena = ["red","green","yellow","blue"]

num = getRndInteger(0,4)
console.log(cadena[num]);