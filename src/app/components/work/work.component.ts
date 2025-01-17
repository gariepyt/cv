import { Component } from "@angular/core";
import WORK from "src/app/constants/work";
import Work from "src/app/interfaces/work.interface";
import { DatePipe } from "@angular/common";

@Component({
  selector: "cv-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
  imports: [DatePipe],
  standalone: true,
})
export class WorkComponent {
  work: Work[] = WORK;
}
