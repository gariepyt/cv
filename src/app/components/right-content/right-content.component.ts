import { Component } from "@angular/core";
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: "cv-right-content",
  templateUrl: "./right-content.component.html",
  styleUrls: ["./right-content.component.scss"],
  imports: [SkillsComponent, HobbiesComponent, EducationComponent],
  standalone: true,
})
export class RightContentComponent {}
