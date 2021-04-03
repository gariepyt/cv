import { Component } from "@angular/core";

import Skill from "../../interfaces/skill.interface";
import SKILLS from "../../constants/skills";

@Component({
  selector: "cv-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;

  dateToYears(year: number) {
    return new Date().getFullYear() - year;
  }
}
