import { Component } from "@angular/core";
import SKILLS from "src/app/constants/skills";
import Skill from "src/app/interfaces/skill.interface";

@Component({
    selector: "cv-skills-inline",
    imports: [],
    templateUrl: "./skills-inline.component.html",
    styleUrl: "./skills-inline.component.scss"
})
export class SkillsInlineComponent {
  skills: Skill[] = SKILLS;
}
