import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: "CRUD Producto - Factura",
      url_git_project: "https://github.com/LuisGomez11/Spring-Producto-Factura",
      img_project: "assets/projects/factura.png",
      description: "API para gestión de productos y facturación desarrollada con Java y Spring Boot, siguiendo los principios de arquitectura hexagonal (puertos y adaptadores). La aplicación expone operaciones CRUD completas (POST, GET, PUT, DELETE) tanto para productos como para facturas, promoviendo una estructura modular, desacoplada y fácilmente escalable.",
      technologies: "Java - Spring Boot - MySQL"
    },
    {
      name: "Página Web Personal",
      url_git_project: "https://github.com/LuisGomez11/app-luis-gomez",
      img_project: "assets/projects/app_luis_gomez.png",
      description: "Página web responsiva diseñada para presentar mi perfil profesional, conocimientos en desarrollo web y experiencia con diversas tecnologías. Funciona como portafolio personal, destacando proyectos, habilidades y trayectoria como desarrollador Full Stack.",
      technologies: "HTML - CSS - TypeScript - Angular - Bootstrap"
    },
    {
      name: "Agenda de Personas",
      url_git_project: "https://github.com/LuisGomez11/api-angular-spring",
      img_project: "assets/projects/api_angular_spring.png",
      description: "Aplicación desarrollada como parte de mi formación inicial como desarrollador Full Stack. Permite realizar operaciones CRUD (crear, listar, editar y eliminar) sobre un listado de personas. El backend está implementado con Spring Boot, mientras que el frontend fue desarrollado en Angular, utilizando la librería Bootstrap para asegurar un diseño responsivo y adaptable a distintos dispositivos.",
      technologies: "Angular - Spring Boot - MySQL - TypeScript - Bootstrap"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
