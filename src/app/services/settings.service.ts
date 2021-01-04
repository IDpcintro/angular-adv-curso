import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  private linkTheme = document.querySelector('#theme');


  constructor() {

    const url = localStorage.getItem('theme') || `./assets/css/colors/purple-dark.css`;

    //const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);

    console.log('Setting Service Init');
   }



  changeTheme( theme: string ) {

    //this.linkTheme = document.querySelector('#theme');

    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();


  }


  checkCurrentTheme(){

   // public links:NodeListOf<Element>;

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

        elem.classList.remove('working');

        const btnTheme = elem.getAttribute('data-theme');
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme.getAttribute('href');

        if ( btnThemeUrl === currentTheme){
          elem.classList.add('working');
        }

    });

    
  }

}
