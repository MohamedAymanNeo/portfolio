import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsArray = [
    {imgSrc: 'assets/img/skill/html.png', skillName: 'html'},
    {imgSrc: 'assets/img/skill/css.png', skillName: 'css'},
    {imgSrc: 'assets/img/skill/javascript.png', skillName: 'javascript'},
    {imgSrc: 'assets/img/skill/bootstrap.png', skillName: 'bootstrap'},
    {imgSrc: 'assets/img/skill/jquery.png', skillName: 'jquery'},
    {imgSrc: 'assets/img/skill/sass.png', skillName: 'sass'},
    {imgSrc: 'assets/img/skill/wordpress.png', skillName: 'wordpress'},
    {imgSrc: 'assets/img/skill/react.png', skillName: 'react'},
    {imgSrc: 'assets/img/skill/github.png', skillName: 'github'},
    {imgSrc: 'assets/img/skill/vscode.png', skillName: 'vscode'},
    {imgSrc: 'assets/img/skill/photoshop.png', skillName: 'photoshop'},
    {imgSrc: 'assets/img/skill/illustrator.png', skillName: 'illustrator'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
