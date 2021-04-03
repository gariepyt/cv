import { Component } from "@angular/core";
import EDUCATION from "src/app/constants/education";
import Education from "src/app/interfaces/education.interface";

@Component({
  selector: "cv-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent {
  education: Education[] = EDUCATION;
}
