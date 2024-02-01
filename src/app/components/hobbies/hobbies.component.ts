import { Component } from "@angular/core";
import HOBBY from "src/app/constants/hobby";
import { NgFor } from "@angular/common";

@Component({
    selector: "cv-hobbies",
    templateUrl: "./hobbies.component.html",
    styleUrls: ["./hobbies.component.scss"],
    standalone: true,
    imports: [NgFor],
})
export class HobbiesComponent {
  hobbies = HOBBY;
}
