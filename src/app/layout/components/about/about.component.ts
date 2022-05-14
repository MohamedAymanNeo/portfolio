import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  educationContent= [
    {time: 'Nov.2018 - Feb.2019', position: '3 Month Professional Diploma', company: 'Mansoura Branch', content: 'MEAN Stack Track, Information Technology Institute (ITI)'},
    {time: 'Sep.2012 - May.2016', position: 'Bachelor Degree Of Specific Education', company: 'Mansoura University', content: 'Bachelor Degree Of Specific Education, Computer Department, Faculty of Specific Education'},
  ]
  personalInfo = [
    {type: 'first',personalFirstList: [
      {title: 'first name: ', value: 'Mohamed'},
      {title: 'last name: ', value: 'Ayman'},
      {title: 'Age: ', value: '28 Years'},
      {title: 'Nationality: ', value: 'Egyption'},
      {title: 'Freelance: ', value: 'Available'},
    ]},
    {
      type: 'second', personalSecondList: [
        {title: 'Address: ', value: 'Mansoura'},
        {title: 'phone: ', value: '+20 100 279 7928'},
        {title: 'Skype: ', value: 'mohamed.ayman'},
        {title: 'langages: ', value: 'Arabic, English'},
        {title: 'Email: ', value: 'mohamedaymen.dev@gmail.com'},
      ] 
    }
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
