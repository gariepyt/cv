import { Component } from "@angular/core";

import Skill from "../../interfaces/skill.interface";
import SKILLS from "../../constants/skills";

@Component({
  selector: "cv-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  standalone: true,
  imports: [],
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;

  dateToYears(year: number) {
    return Math.max(new Date().getFullYear() - year, 1);
  }
}
