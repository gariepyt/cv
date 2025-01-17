import { Component, OnInit } from "@angular/core";
import { WorkComponent } from "../work/work.component";
import { ResumeInfoComponent } from "../resume-info/resume-info.component";

@Component({
  selector: "cv-left-content",
  templateUrl: "./left-content.component.html",
  styleUrls: ["./left-content.component.scss"],
  imports: [WorkComponent, ResumeInfoComponent],
})
export class LeftContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
