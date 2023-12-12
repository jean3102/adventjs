// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
// las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. 
// Tu tarea es escribir una función que tome una cadena de texto y revierta los 
// caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
// por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
    // Code here

    const stack = [];
    let result = '';
  
    for (const char of message) {
      if (char === '(') {
        // Si encontramos un paréntesis de apertura, lo agregamos a la pila
        stack.push(result);
        result = '';
      } else if (char === ')') {
        // Si encontramos un paréntesis de cierre, invertimos la cadena acumulada y la combinamos con la anterior
        result = stack.pop() + result.split('').reverse().join('');
      } else {
        // Si no es un paréntesis, simplemente agregamos el carácter a la cadena acumulada
        result += char;
      }
    }
  
    return result;
}


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
// Notas:

// Las cadenas de entrada siempre estarán bien formadas con paréntesis que
// coinciden correctamente, no necesitas validarlos.
// En el mensaje final no deben quedar paréntesis.
// El nivel máximo de anidamiento es 2.
