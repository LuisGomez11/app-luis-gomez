import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var emailjs: any;
declare var Swal: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    messagge: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    emailjs.init('UMTMYI_ZlypjkG2dZ');
    emailjs.send("service_br5v32t","template_9b61liv", {
      subject: this.form.value.subject,
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.messagge,
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado!',
        text: 'El correo ha sido enviado exitosamente.',
      });
      this.form.reset();
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el correo. Intenta de nuevo más tarde.',
      });
    });
  }

}
