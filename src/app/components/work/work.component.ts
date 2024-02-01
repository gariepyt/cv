import { Component } from "@angular/core";
import WORK from "src/app/constants/work";
import Work from "src/app/interfaces/work.interface";
import { NgFor, NgIf, DatePipe } from "@angular/common";

@Component({
    selector: "cv-work",
    templateUrl: "./work.component.html",
    styleUrls: ["./work.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        DatePipe,
    ],
})
export class WorkComponent {
  work: Work[] = WORK;
}
