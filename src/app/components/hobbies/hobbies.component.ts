import { Component } from "@angular/core";
import HOBBY from "src/app/constants/hobby";

@Component({
    selector: "cv-hobbies",
    templateUrl: "./hobbies.component.html",
    styleUrls: ["./hobbies.component.scss"],
    imports: []
})
export class HobbiesComponent {
  hobbies = HOBBY;
}
