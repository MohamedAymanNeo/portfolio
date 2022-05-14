import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsArray = [
    {imgSrc: 'assets/img/skill/html.svg', skillName: 'html'},
    {imgSrc: 'assets/img/skill/css-3.svg', skillName: 'css'},
    {imgSrc: 'assets/img/skill/javascript.svg', skillName: 'javascript'},
    {imgSrc: 'assets/img/skill/bootstrap.svg', skillName: 'bootstrap'},
    {imgSrc: 'assets/img/skill/jquery.svg', skillName: 'jquery'},
    {imgSrc: 'assets/img/skill/sass.svg', skillName: 'sass'},
    {imgSrc: 'assets/img/skill/tailwind-css-2.svg', skillName: 'tailwind'},
    {imgSrc: 'assets/img/skill/angular-icon.svg', skillName: 'angular'},
    {imgSrc: 'assets/img/skill/react.svg', skillName: 'react'},
    {imgSrc: 'assets/img/skill/github.svg', skillName: 'github'},
    {imgSrc: 'assets/img/skill/pug.svg', skillName: 'pug'},
    {imgSrc: 'assets/img/skill/leetcode.svg', skillName: 'problem Solving'},
    {imgSrc: 'assets/img/skill/vscode.svg', skillName: 'vscode'},
    {imgSrc: 'assets/img/skill/photoshop.svg', skillName: 'photoshop'},
    {imgSrc: 'assets/img/skill/illustrator.svg', skillName: 'illustrator'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
