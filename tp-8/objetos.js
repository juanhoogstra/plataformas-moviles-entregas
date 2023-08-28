var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
]
var personaEjemplo = listaPersonasEjemplo[0]

/**
 * Recibe
 * - `nombre`: string, con el nombre
 * - `apellido`: string, con el apellido
 * - `edad`: numero entero, con la edad de la persona
 * - `documento`: numero entero, con el documento de la persona
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        "nombre": nombre,
        "apellido": apellido,
        "edad": edad,
        "documento": documento ,
    }; 
}
console.log("crearPersona()", crearPersona("Juan", "Pérez", 20, 123456));


/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    var apellido = persona.apellido;
    var nombre = persona.nombre;

    var nombreCompleto = apellido + ", " + nombre; 
    
    return nombreCompleto;
}
console.log("nombreCompletoDePersona()", nombreCompletoDePersona(personaEjemplo));

/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    persona.edad ++;
    return persona;
}
console.log("felizCumpleaños()", felizCumpleaños(personaEjemplo));

/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
    return {
        "nombre": persona.nombre,
        "apellido": persona.apellido,
        "edad": persona.edad,
    }
}
console.log("sinDocumento()", sinDocumento(personaEjemplo));

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    listaDePersonas.sort((a, b) => {
        const apellidoA = a.apellido.toUpperCase();
        const apellidoB = b.apellido.toUpperCase();

        return apellidoA.localeCompare(apellidoB);
    });

    return listaDePersonas; 
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    const nombres = listaDePersonas.map(persona => persona.nombre);
    return nombres;    
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    if (listaDePersonas.length === 0) {
        return 0;
    }

    const sumarEdades = listaDePersonas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    const promedio = sumarEdades / listaDePersonas.length;
    return promedio;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    const personasMayores = listaDePersonas.filter(persona => persona.edad >= 18);
    return personasMayores;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    if (listaDePersonas.length === 0) {
        return null;
    }

    const personaMayor = listaDePersonas.reduce((personaMayor, personaActual) => {
        if (!personaMayor || personaActual.edad > personaMayor.edad) {
            return personaActual;
        }
        return personaMayor;
        
    }, null);

    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
