import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: any[] = [];
  langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }

  loadTranslations(): void {
    this.translate.get('projects.items').subscribe((translatedProjects) => {
      this.projects = [
        {
          name: translatedProjects[0].name,
          git_project: false,
          url_git_project: "",
          img_project: "assets/projects/aldea.webp",
          description: translatedProjects[0].description,
          technologies: [
            { name: "HTML", image: "assets/skills/html.webp" },
            { name: "CSS", image: "assets/skills/css.webp" },
            { name: "Sass", image: "assets/skills/sass.webp" },
            { name: "TypeScript", image: "assets/skills/ts.webp" },
            { name: "Angular", image: "assets/skills/angular.webp" },
            { name: "Angular Material", image: "assets/skills/material.png" },
          ]
        },
        {
          name: translatedProjects[1].name,
          git_project: true,
          url_git_project: "https://github.com/LuisGomez11/Spring-Producto-Factura",
          img_project: "assets/projects/factura.webp",
          description: translatedProjects[1].description,
          technologies: [
            { name: "Java", image: "assets/skills/java.webp" },
            { name: "Spring Boot", image: "assets/skills/spring.webp" },
            { name: "MySQL", image: "assets/skills/mysql.webp" }
          ]
        },
        {
          name: translatedProjects[2].name,
          git_project: true,
          url_git_project: "https://github.com/LuisGomez11/api-angular-spring",
          img_project: "assets/projects/api_angular_spring.webp",
          description: translatedProjects[2].description,
          technologies: [
            { name: "Angular", image: "assets/skills/angular.webp" },
            { name: "TypeScript", image: "assets/skills/ts.webp" },
            { name: "Bootstrap", image: "assets/skills/bootstrap.webp" },
            { name: "Java", image: "assets/skills/java.webp" },
            { name: "Spring Boot", image: "assets/skills/spring.webp" },
            { name: "MySQL", image: "assets/skills/mysql.webp" }
          ]
        }
      ];
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}