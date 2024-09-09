import { Component } from "@angular/core";
import WORK from "src/app/constants/work";
import Work from "src/app/interfaces/work.interface";
import { DatePipe } from "@angular/common";

@Component({
  selector: "cv-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
  standalone: true,
  imports: [DatePipe],
})
export class WorkComponent {
  work: Work[] = WORK;
}
