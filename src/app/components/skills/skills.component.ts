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
      urlImage: "assets/skills/html.png"
    },
    {
      name: "CSS",
      urlImage: "assets/skills/css.png"
    },
    {
      name: "JavaScript",
      urlImage: "assets/skills/js.png"
    },
    {
      name: "TypeScript",
      urlImage: "assets/skills/ts.png"
    },
    {
      name: "Angular",
      urlImage: "assets/skills/angular.png"
    },
    {
      name: "VueJS",
      urlImage: "assets/skills/vue.png"
    },
    {
      name: "Bootstrap",
      urlImage: "assets/skills/bootstrap.png"
    },
    {
      name: "Angular Material",
      urlImage: "assets/skills/material.png"
    },
    {
      name: "Java",
      urlImage: "assets/skills/java.png"
    },
    {
      name: "Spring Boot",
      urlImage: "assets/skills/spring.png"
    },
    {
      name: "Git",
      urlImage: "assets/skills/git.png"
    },
    {
      name: "MySQL",
      urlImage: "assets/skills/mysql.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
