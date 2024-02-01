import { Component, OnInit } from '@angular/core';
import VOLUNTEER from 'src/app/constants/volunteer';
import Volunteer from 'src/app/interfaces/volunteer.interface';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'cv-volunteer',
    templateUrl: './volunteer.component.html',
    styleUrls: ['./volunteer.component.scss'],
    standalone: true,
    imports: [NgFor, DatePipe]
})
export class VolunteerComponent {
  volunteer: Volunteer[] = VOLUNTEER;
}
