import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  technologies = [
    {
      name: "HTML",
      urlImage: "assets/skills/html.webp"
    },
    {
      name: "CSS",
      urlImage: "assets/skills/css.webp"
    },
    {
      name: "JavaScript",
      urlImage: "assets/skills/js.webp"
    },
    {
      name: "TypeScript",
      urlImage: "assets/skills/ts.webp"
    },
    {
      name: "Angular",
      urlImage: "assets/skills/angular.webp"
    },
    {
      name: "Sass",
      urlImage: "assets/skills/sass.webp"
    },
    {
      name: "Bootstrap",
      urlImage: "assets/skills/bootstrap.webp"
    },
    {
      name: "Material",
      urlImage: "assets/skills/material.png"
    },
    {
      name: "Java",
      urlImage: "assets/skills/java.webp"
    },
    {
      name: "Spring Boot",
      urlImage: "assets/skills/spring.webp"
    },
    {
      name: "Git",
      urlImage: "assets/skills/git.webp"
    },
    {
      name: "MySQL",
      urlImage: "assets/skills/mysql.webp"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
