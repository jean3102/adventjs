// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar 
// y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres.
// Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los 
// materiales necesarios para fabricarlo.
function manufacture(gifts, materials) {
    // Code here
    const toysAvailable = []
    for (const item of gifts) {
        let existWord = true
        let splitItem = item.split('')

        for (const word of splitItem) {
            if (!materials.includes(word)) {
                existWord = false
            }
        }
        if (existWord) toysAvailable.push(item)
    }
    console.log(toysAvailable)
}


let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

manufacture(gifts, materials) // []