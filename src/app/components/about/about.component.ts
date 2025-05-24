import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  list_about = [
    {
      title: "¿Quien Soy?",
      icon: "fa-solid fa-circle-user",
      description: "Soy Luis Alberto Gómez Arteaga, Ingeniero de Sistemas egresado de la Fundación Universitaria Tecnológico Comfenalco de Cartagena, Colombia. Me apasiona desarrollar soluciones tecnológicas eficientes, aplicando buenas prácticas de programación y manteniendo siempre un enfoque centrado en el usuario."
    },
    {
      title: "Mi Perfil",
      icon: "fa-solid fa-laptop-code",
      description: "Desarrollador Full-Stack con 5 años de experiencia en el desarrollo de aplicaciones web. En el frontend, trabajo con JavaScript, TypeScript y Angular, y tengo conocimientos básicos en Vue.js. Diseño interfaces responsivas y accesibles. En backend trabajo con Java y Spring Boot, enfocado en la construcción de APIs REST y microservicios, aplicando principios SOLID y arquitecturas como hexagonal y en capas. Con experiencia en bases de datos relacionales como MySQL."
    },
    {
      title: "Mi Objetivo",
      icon: "fa-solid fa-rocket",
      description: "Mi objetivo es seguir expandiendo mis conocimientos en nuevas tecnologías, fortalecer los que ya he adquirido y continuar ganando experiencia como desarrollador tanto en el backend como en el frontend."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
