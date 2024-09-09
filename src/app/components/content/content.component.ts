import { Component } from "@angular/core";
import { RightContentComponent } from "../right-content/right-content.component";
import { LeftContentComponent } from "../left-content/left-content.component";
import { WorkComponent } from "../work/work.component";
import { EducationComponent } from "../education/education.component";
import { SkillsInlineComponent } from "../skills-inline/skills-inline.component";
import { HobbiesInlineComponent } from "../hobbies-inline/hobbies-inline.component";

@Component({
  selector: "cv-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  standalone: true,
  imports: [
    LeftContentComponent,
    RightContentComponent,
    WorkComponent,
    EducationComponent,
    SkillsInlineComponent,
    HobbiesInlineComponent,
  ],
})
export class ContentComponent {}
