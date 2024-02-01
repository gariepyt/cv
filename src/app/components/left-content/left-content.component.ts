import { Component, OnInit } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { WorkComponent } from '../work/work.component';

@Component({
    selector: 'cv-left-content',
    templateUrl: './left-content.component.html',
    styleUrls: ['./left-content.component.scss'],
    standalone: true,
    imports: [WorkComponent, EducationComponent]
})
export class LeftContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
