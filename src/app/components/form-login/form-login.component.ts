import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  register={
   // name: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // El objetivo es que se reciba este evento solo si todos los campos son validos
  onRegister(){
    console.log(this.register)
  }

}
