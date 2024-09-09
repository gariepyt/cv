import { Component } from "@angular/core";
import EDUCATION from "src/app/constants/education";
import Education from "src/app/interfaces/education.interface";
import { DatePipe } from "@angular/common";

@Component({
  selector: "cv-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
  standalone: true,
  imports: [DatePipe],
})
export class EducationComponent {
  education: Education[] = EDUCATION;
}
