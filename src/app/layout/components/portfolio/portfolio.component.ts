import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioProjects = [
    {imgSrc: 'assets/img/projects/project-1.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-2.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-3.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-4.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-5.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-6.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-7.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-8.jpg', projectName: 'Image Project'},
    {imgSrc: 'assets/img/projects/project-9.jpg', projectName: 'Image Project'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
