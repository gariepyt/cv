import { Component, OnInit } from '@angular/core';

import Education from 'src/app/interfaces/education.interface';
import Work from 'src/app/interfaces/work.interface';
import Skill from 'src/app/interfaces/skill.interface';
import Volunteer from 'src/app/interfaces/volunteer.interface';

import EDUCATION from 'src/app/constants/education';
import WORK from 'src/app/constants/work';
import SKILLS from 'src/app/constants/skills';
import VOLUNTEER from 'src/app/constants/volunteer';

@Component({
  selector: 'cv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  education: Education[] = EDUCATION;
  work: Work[] = WORK;
  skills: Skill[] = SKILLS;
  volunteer: Volunteer[] = VOLUNTEER;

  constructor() { }

  ngOnInit() { }

  dateToYears(year: number) {
    return new Date().getFullYear() - year
  }

}
