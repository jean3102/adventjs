// En el taller de Santa, un elfo travieso ha estado jugando en la 
// cadena de fabricación de regalos, añadiendo o eliminando un paso
//  no planificado.

// Tienes la secuencia original de pasos en la fabricación original
//  y la secuencia modificada modified que puede incluir un paso extra
//  o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el 
// primer paso extra que se ha añadido o eliminado en la cadena de
// fabricación.Si no hay ninguna diferencia entre las secuencias,
// devuelve una cadena vacía.


function findNaughtyStep(original, modified) {
    // Code here
    const splitOriginal = original.split('')
    const splitModified = modified.split('')

    if (splitOriginal.length === 0) return modified

    if (splitOriginal.length === splitModified.length) {
        for (const key in splitOriginal) {
            if (splitOriginal[key] !== splitModified[key]) {
                return splitModified[key]
            }
        }
    }

    if (splitOriginal.length > splitModified.length) {
        for (const key in splitOriginal) {
            if (splitOriginal[key] !== splitModified[key]) {
                return splitOriginal[key]
            }
        }
    }

    if (splitOriginal.length < splitModified.length) {
        for (const key in splitModified) {
            if (splitOriginal[key] !== splitModified[key]) {
                return splitModified[key]
            }
        }
    }

    return ''
}


const original1 = 'abcd'
const modified1 = 'abcde'
const value1 = findNaughtyStep(original1, modified1) // 'e'
console.log(`🚀 ------------ value1:`, value1)

const original2 = 'stepfor'
const modified2 = 'stepor'
const value2 = findNaughtyStep(original2, modified2) // 'f'
console.log(`🚀 ------------ value2:`, value2)

const original3 = 'abcde'
const modified3 = 'abcde'
const value3 = findNaughtyStep(original3, modified3) // ''
console.log(`🚀 ------------ value3:`, value3)


// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía