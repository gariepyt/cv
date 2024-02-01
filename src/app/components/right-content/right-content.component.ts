import { Component } from "@angular/core";
import { ResumeInfoComponent } from "../resume-info/resume-info.component";
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: "cv-right-content",
    templateUrl: "./right-content.component.html",
    styleUrls: ["./right-content.component.scss"],
    standalone: true,
    imports: [
        ContactComponent,
        SkillsComponent,
        HobbiesComponent,
        ResumeInfoComponent,
    ],
})
export class RightContentComponent {}
