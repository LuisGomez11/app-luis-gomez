import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageService } from 'src/app/service/language.service';

interface Language {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLanguage = new FormControl('es');
  isScrolled = false;
  dropdownOpen = false;

  languages: Language[] = [
    { code: 'es', label: 'language.es', flag: 'assets/spain.png' },
    { code: 'en', label: 'language.en', flag: 'assets/usa.png' },
  ];

  get selectedLanguage(): Language {
    return this.languages.find(lang => lang.code === this.currentLanguage.value) ?? this.languages[0];
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    const lang = this.languageService.getLanguage();
    this.currentLanguage.setValue(lang);

    this.currentLanguage.valueChanges.subscribe(language => {
      this.onChangeLanguage(language);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.custom-dropdown');
    if (!clickedInside) {
      this.dropdownOpen = false;
    }
  }
  

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 150);
  }

  selectLanguage(lang: Language) {
    this.currentLanguage.setValue(lang.code);

    var element = document.getElementById("myDIV");
    element.classList.remove("d-block");
    
    this.dropdownOpen = false;
  }

  onChangeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }
}