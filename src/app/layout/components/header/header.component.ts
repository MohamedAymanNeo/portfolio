import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links= [
    {icon: 'fa fa-home', link: '/', linkName: 'Home'},
    {icon: 'fa fa-user', link: '/about', linkName: 'About'},
    {icon: 'fa fa-briefcase', link: '/experience', linkName: 'Experience'},
    {icon: 'fa fa-lightbulb-o', link: '/skills', linkName: 'Skills'},
    {icon: 'fa fa-briefcase', link: '/portfolio', linkName: 'Portfolio'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
