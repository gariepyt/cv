import { Component, OnInit } from "@angular/core";
import { EducationComponent } from "../education/education.component";
import { WorkComponent } from "../work/work.component";
import { ResumeInfoComponent } from "../resume-info/resume-info.component";

@Component({
  selector: "cv-left-content",
  templateUrl: "./left-content.component.html",
  styleUrls: ["./left-content.component.scss"],
  standalone: true,
  imports: [WorkComponent, EducationComponent, ResumeInfoComponent],
})
export class LeftContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
