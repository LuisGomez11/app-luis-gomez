import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  changeLanguage(idioma: string) {
    this.translate.use(idioma);
  }

  getLanguage(): string {
    return this.translate.currentLang;
  }
}