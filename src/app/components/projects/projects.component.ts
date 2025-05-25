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
          url_git_project: "https://github.com/LuisGomez11/Spring-Producto-Factura",
          img_project: "assets/projects/factura.png",
          description: translatedProjects[0].description,
          technologies: [
            { name: "Java", image: "assets/skills/java.png" },
            { name: "Spring Boot", image: "assets/skills/spring.png" },
            { name: "MySQL", image: "assets/skills/mysql.png" }
          ]
        },
        {
          name: translatedProjects[1].name,
          url_git_project: "https://github.com/LuisGomez11/app-luis-gomez",
          img_project: "assets/projects/app_luis_gomez.png",
          description: translatedProjects[1].description,
          technologies: [
            { name: "HTML", image: "assets/skills/html.png" },
            { name: "CSS", image: "assets/skills/css.png" },
            { name: "TypeScript", image: "assets/skills/ts.png" },
            { name: "Angular", image: "assets/skills/angular.png" },
            { name: "Bootstrap", image: "assets/skills/bootstrap.png" }
          ]
        },
        {
          name: translatedProjects[2].name,
          url_git_project: "https://github.com/LuisGomez11/api-angular-spring",
          img_project: "assets/projects/api_angular_spring.png",
          description: translatedProjects[2].description,
          technologies: [
            { name: "Angular", image: "assets/skills/angular.png" },
            { name: "TypeScript", image: "assets/skills/ts.png" },
            { name: "Bootstrap", image: "assets/skills/bootstrap.png" },
            { name: "Java", image: "assets/skills/java.png" },
            { name: "Spring Boot", image: "assets/skills/spring.png" },
            { name: "MySQL", image: "assets/skills/mysql.png" }
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