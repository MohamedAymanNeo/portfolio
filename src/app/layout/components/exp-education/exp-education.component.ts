import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-education',
  templateUrl: './exp-education.component.html',
  styleUrls: ['./exp-education.component.css']
})
export class ExpEducationComponent implements OnInit {

  eduExpArray = [
    {name: 'experience', icon:'fa fa-briefcase' ,experienceContent: [
      {time: '2018- present', position: 'Web Developer', company: 'Envato'},
      {time: '2013 - 2018', position: 'UI/UX Designer', company: 'Themeforest'},
      {time: '2005 - 2013', position: 'Consultant', company: 'Videohive'},
      
    ]},
    {name: 'education', icon:'fa fa-graduation-cap' ,educationContent: [
      {time: '2015', position: 'Engineering Degree', company: 'Oxford University'},
      {time: '2012', position: 'Master Degree', company: 'Kiev University'},
      {time: '2009', position: 'Bachelor Degree', company: 'Tunis High School'},
    ]}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
