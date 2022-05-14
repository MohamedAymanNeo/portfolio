import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-education',
  templateUrl: './exp-education.component.html',
  styleUrls: ['./exp-education.component.css']
})
export class ExpEducationComponent implements OnInit {

  eduExpArray = [
    {name: 'experience', icon:'fa fa-briefcase' ,experienceContent: [
      {time: 'Feb.2020- present', position: 'Mid-Senior Frontend Developer', company: 'qTech (alqemam)'},
      {time: 'Jun.2019 - Feb.2020', position: 'Junior Frontend Developer', company: 'Delta Soft'},
      
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
