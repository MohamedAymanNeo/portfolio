import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioParts = [
    {

      name: 'Styling area', 
      class:'styling',
      subtitle: 'daily practice',
      footerContent:'browsing all in github',
      areaProjects: [
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'Services Section (Challenge)',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
      ]
    },
    {

      name: 'Projects area', 
      class:'websites',
      subtitle: 'these were hard times ◕‸◕',
      footerContent:'browsing all in github',
      areaProjects: [
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
      ]
    },
    {

      name: 'recent projects', 
      class:'recent',
      subtitle: 'selected ones',
      footerContent:'browsing all in github',
      areaProjects: [
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
        {projectImg: 'assets/img/projects/project-1.jpg',
         projectTitle: 'First Project',
         projectSkills: 'HTML5, CSS3, SASS/SCSS',
         projectSummary: 'This work has been featured on CodePen ❤',
         projectLive: 'live',
         projectSource: 'source',
         projectTime: '2020',
        },
      ]
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
