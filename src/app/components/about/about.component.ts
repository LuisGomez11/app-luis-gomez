import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  list_about: any[] = [];
  langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTranslations();

    // Se vuelve a cargar cuando el idioma cambia
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }

  loadTranslations(): void {
    this.translate.get([
      'about.personal.title',
      'about.personal.description',
      'about.perfil.title',
      'about.perfil.description',
      'about.objective.title',
      'about.objective.description'
    ]).subscribe(translations => {
      this.list_about = [
        {
          title: translations['about.personal.title'],
          icon: "fa-solid fa-circle-user",
          description: translations['about.personal.description']
        },
        {
          title: translations['about.perfil.title'],
          icon: "fa-solid fa-laptop-code",
          description: translations['about.perfil.description']
        },
        {
          title: translations['about.objective.title'],
          icon: "fa-solid fa-rocket",
          description: translations['about.objective.description']
        }
      ];
    });
  }

  ngOnDestroy(): void {
    // Cancelamos la suscripción al destruir el componente
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}