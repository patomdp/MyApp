import { Component } from '@angular/core';


// Modelo de producto
import { Product } from './models/product';
import { Saint } from './models/saint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  // Estas variables tienen que tener acceso público para que el componente pueda acceder
  public name: string = 'Patricio'; // 👈 public
  public age: number = 33;
  widthImg: number= 10;
  img = 'https://source.unsplash.com/random'; // random img
  btnDisabled = true;
  //values : Array<string> = [];
  values: string = 'Default';


  //Ahora vamos a hacerlo con objetos
  person = {
    name: 'Gandalf',
    age: 50,
    avatar: 'https://pickaface.net/gallery/avatar/EstherBeedleH51dc35acb3d14.png',
    health: 100
  }
  // Array de nombres, se puede usar any[] si voy a almacenar cualquier cosa
  names: string[] = ['Nico', 'Juli', 'Santi'];
  // creamos un nuevo nombre y vamos a poner en ngModel que se escuche esta variable siempre
  newName: string = '';

  //Saints
  saints: Saint[] = [
    {
      name: 'Seiya',
      star: 'Pegaso'
    },
    {
      name: 'Hyoga',
      star: 'Cisne'
    },
    {
     name: 'Shiryu',
     star: 'Dragón'
    },
    {
      name: 'Shun',
      star: 'Andrómeda'
    },
    {
      name: 'Ikki',
      star: 'Fénix'

    }
  ];
  newSaint: Saint = {name: 'Santo Prueba', star:'Estrella'}


  // Boton para togglear el disabled.
  public toggleButton(): void {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(): void {
    this.person.age++
  }

  decreaseAge(): void {
    this.person.age--
  }

  // Con esto vamos a capturar el evento que nos envía Angular
  onScroll(event: Event) {
    // dependiendo de cual sea el elemento, es lo que podemos hacer con este evento.
    // ej, si es un div o un input
    const element = event.target as HTMLElement; // Con esto obtenemos el tipado de elemento HTML
    console.log(element.scrollTop); // para leer la posición
  }

  // Este evento es para capturar las teclas que se estan presionando
  changeName(event: Event) {
    const element = event.target as HTMLInputElement; // Con esto obtenemos el tipado de input
    // Para cambiar el valor que tenemos almacenado en el nombre por el que entra en el input
    this.person.name = element.value;
    console.log(element.value);

  }

  // Funcion para agregar el input en la lista.
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    // para splice se le pasa la posicion y cuantos elementos quiero eliminar a partir de esa posición
    this.names.splice(index, 1);
  }




  // sin informacion de tipo ... simplifica el código al costo de no saber las propiedades del evento
  onK(event: any) {
    this.values += event.target.value + ' | ';
  }
  // define un tipo de dato para el evento que estamos capturando, lo que nos permite utilizar las propiedades adecuadas para el objeto
  onKey(event: KeyboardEvent) {
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }
  // No todos los elementos tienen una value propiedad, por lo que se convierte target en un elemento de entrada. El método onKey expresa más claramente lo que espera y cómo debera interpretar el evento.

  // Saint Functions

  addStar(index: number) {
    this.saints[index].name += '⭐';

  }

  removeStar(index: number) {
    if (this.saints[index].name.includes('⭐')) {
      this.saints.push({name:'newSaint', star:'✨'});
      //this.saints[index].replace('⭐', ' ')
    } else {
      this.saints.push({name:'wrongSaint', star:'⛔'});
    }

  }

  // Products

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  // Box para ver styles

  box: any = {
    width: 100,
    height: 100,
    background: 'red'

  }




}
