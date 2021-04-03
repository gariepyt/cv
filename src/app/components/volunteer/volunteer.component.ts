import { Component, OnInit } from '@angular/core';
import VOLUNTEER from 'src/app/constants/volunteer';
import Volunteer from 'src/app/interfaces/volunteer.interface';

@Component({
  selector: 'cv-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent {
  volunteer: Volunteer[] = VOLUNTEER;
}
