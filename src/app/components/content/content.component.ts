import { Component, OnInit } from '@angular/core';
import Education from 'src/app/interfaces/education.interface';
import EDUCATION from 'src/app/constants/education';

@Component({
  selector: 'cv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  education: Education[] = EDUCATION;

  constructor() { }

  ngOnInit() {
    console.log(this.education[0].endDate)
  }

}
