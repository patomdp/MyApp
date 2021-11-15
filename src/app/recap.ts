// Este es un archivo para repasar conceptos de TypeScript

// Declaracion de una variable:
// TypeScript puede inferir tipos, entonces hay que poner el tipo que es.
// El tipado puede reducir el 60% de los errores que cometemos.

const username: string = 'patomdp';
const stringONumber: string | number = 1;

// Arroy Function
const sum = (a:number, b:number) => {
 return a+b;
}

sum(10,50);
// De esta manera puedo tener feedback para detectar los errores desde el VSC


// Patrón orientado a objetos:

class Person {
    // Declaración de las variables
    age: number;
    lastName: string;

    // Constructor para crear los objetos
    constructor(age:number, lastName: string){
        // Asignación de las variables
        this.age = age; // Le digo que inicialice con el valor que reciba el constructor
        this.lastName = lastName;
    }
}

// En esta clase nos ahorramos la declaracion y la asignacion
class Person2 {
    
    // al ser publico ya lo vuelve un atributo de la clase y el valor que
    // se reciba por el constructor ya se asigna directamente.
    constructor(public age: number, public lastName: string){}
}

// COn esto construyo el objeto
const pato = new Person(33,'Mariano');

// Estas variables que utilizo pueden tener diferentes tipos de visibilidad, ser publicas, privadas, etc.
// por defecto las variables son publicas, entonces podria acceder a pato.age;

// Si le pongo private, solo es accesible para uso interno dentro de la clase Persona
// a menos que se utilice un getter o alguna de esas estrategias

// String Interpolation:

// {{ 1+1 }}
// {{ myVar }}
// {{ myFunction() }}

