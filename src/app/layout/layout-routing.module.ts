import { ExpEducationComponent } from './components/exp-education/exp-education.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LayoutComponent } from './layout.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'experience',
        component: ExpEducationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
