import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mohamed Portfolio';
  constructor() {
    localStorage.setItem('theme', 'dark')
  }

  onInit() {
    // this.darkMode()
  }
  // darkMode() {
  //   if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
    
  //   // Whenever the user explicitly chooses light mode
  //   // localStorage.theme = 'light'
    
  //   // Whenever the user explicitly chooses dark mode
  //   // localStorage.theme = 'dark'
    
  //   // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem('theme')
  // }
}
