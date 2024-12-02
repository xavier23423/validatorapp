import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  message: string = '';
  messageColor: string = '';

  constructor() {}

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(this.email)) {
      this.message = 'Correo válido. ¡Mensaje enviado!';
      this.messageColor = 'success';

      // Aquí puedes implementar la lógica para enviar el correo
      console.log('Correo enviado a:', this.email);
    } else {
      this.message = 'Por favor, ingresa un correo válido.';
      this.messageColor = 'danger';
    }
  }
}
