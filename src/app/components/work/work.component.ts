import { Component } from "@angular/core";
import WORK from "src/app/constants/work";
import Work from "src/app/interfaces/work.interface";

@Component({
  selector: "cv-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent {
  work: Work[] = WORK;
}
