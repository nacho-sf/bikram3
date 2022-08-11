// 1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula
/*
let coche = {
    marca: 'Opel',
    modelo: 'Kadet',
    matricula: '2398KGB',
};
*/

// 2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso
/*
let casa = {
    codPostal: '28012',
    calle: 'Desengaño 21',
    portal: '4',
    piso: '2º',
};
*/

// 3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos
/*
let fullStackDeveloper = {
    arrayLenguajes: [],
    arrayProyectos: [],
};
*/

// 4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)

/*
let perro = {
    nombre: 'Habanero',
    raza: 'Teckel',
    color: 'Truñito',
    edad: 5,
    ladrar: function () {
        return (console.log('wuff!'));
    },
    popo: function () {
        return (Math.random() * 3);
    },
};
*/


// 5.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil
/*
let portatil = {
    marca: 'hp',
};
let marcaPortatil = portatil.marca;
*/

// 6.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2
/*
let portatil = {
    marca: 'acer',
};
let marcaPortatil2 = portatil['marca'];
*/


// 7.- Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos
/*
let concierto = {
    grupos: ['AC/DC','Metallica','Iron Maiden'],
};
let grupos = concierto.grupos;
*/


// 8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]
/*
let led = {
    rojo: 'on',
    verde: 'off',
    azul: 'off',
};
let RGB = [led.rojo, led.verde, led.azul];
*/


// 9.- Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345
/*
let portatil = {
    modelo: 'F124',
};
portatil.modelo = 'P345';
*/


// 10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera
/*
let concierto = {
    cartelera: ['AC/DC','Metallica','Iron Maiden'],
};
concierto.cartelera.push('Guns N Roses');
*/


// 11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)
/*
let concierto = {
    fecha: 'Wed Aug 31 2022 22:00:00 GMT+0200 (hora de verano de Europa central)',
};
concierto.fecha = new Date();
*/


// 12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas
/*
let impresora = {
    imprimiendo: 'doc1',
};
impresora.imprimiendo = docs = {
    nombreArchivo: 'docTitle',
    copias: 12,
    numPaginas: 45,
};
*/


// 13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo
/*
let noticia = {
    titular: 'Titular 1',
    cuerpo: 'Cuerpo 1',
};
*/

// 14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad
/*
let persona = {
    nombre: 'Pepe',
    apellidos: 'Moreno Ramos',
    edad: 56,
};
*/

// 15.- Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'
/*
let avion = {
    numPasajeros: 200,
    despegar: function () {
        return console.log('despegando');
    },
    volar: function () {
        return console.log('llegando al destino');
    },
    aterrizar: function () {
        return console.log('aterrizando');
    },
};
*/


// 16.- Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete
/*
let paquete = {
    contenido: ['platos','vasos','cubiertos'],
};
*/

// 17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio
/*
let pais = {
    numHabitantes: 49000000,
    continente: 'Europa',
    gentilicio: 'Españoles',
};
*/

// 18.- Dado un objeto de nombre O_Error obtén el valor de la propiedad codigo guardándolo en la variable codError
/*
let O_Error = {
    codigo: '404',
};
let codError = O_Error.codigo;
*/

// 19.- Dado un objeto de nombre Grupo obtén el valor de la propiedad array integrantes guardándolo en la variable integrantes
/*
let grupo = {
    integrantes: ['Jay Kay','Toby Smith','Stu Zender'],
};
let integrantes = grupo.integrantes;
*/

// 20.- Dado un objeto de nombre Impresora obtén el valor de la propiedad objeto tinta{rojo, verde, azul} guardándolo en la variable nivelesTinta
/*
let impresora = {
    tinta: cartucho = {
        rojo: '67%',
        verde: '80%',
        azul: '55%',
    },
};
let nivelesTinta = impresora.tinta;
*/

// 21.- Dado un objeto de nombre Pantalla obtén el valor de la propiedad array bidimensional pixeles guardándolo en la variable pixeles
/*
let pantalla = {
    bidimPixeles: ['1920x1080'],
};
pixeles = pantalla.bidimPixeles;
*/

// 22.- Dado un objeto de nombre Movil obtén el valor de la propiedad especificaciones con ["especificaciones"] guardándolo en la variable especificaciones
/*
let movil = {
    especificaciones: ['esp1','esp2'],
};
let especificaciones = movil['especificaciones'];
*/

// 23.- Dado un objeto de nombre Grupo modifica el valor de la propiedad numIntegrantes por el valor 5
/*
let grupo = {
    numIntegrantes: 3,
};
grupo.numIntegrantes = 5;
*/

// 24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080
/*
let pantalla = {
    dimensiones: '200x100',
};
pantalla.dimensiones = '1920x1080';
*/

// 25.- Dado un objeto de nombre Led modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false
/*
let led = {
    encendido: true,
};

switch(led.encendido) {
    case true:
        led.encendido === false;
        console.log('false');
        break;
    case false:
        led.encendido === true;
        console.log('true');
        break;
    default:
        console.log('Solo valores true o false');
};
*/

// 26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º
/*
let movil = {
    temperatura: '24º',
};
movil.temperatura = '20º';
*/