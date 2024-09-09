import { Component } from "@angular/core";
import HOBBY from "src/app/constants/hobby";
import Hobby from "src/app/interfaces/hobby.interface";

@Component({
  selector: "cv-hobbies-inline",
  standalone: true,
  imports: [],
  templateUrl: "./hobbies-inline.component.html",
  styleUrl: "./hobbies-inline.component.scss",
})
export class HobbiesInlineComponent {
  hobbies: Hobby[] = HOBBY;
}
