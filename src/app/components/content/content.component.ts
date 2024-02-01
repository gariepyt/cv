import { Component } from "@angular/core";
import { RightContentComponent } from "../right-content/right-content.component";
import { LeftContentComponent } from "../left-content/left-content.component";

@Component({
    selector: "cv-content",
    templateUrl: "./content.component.html",
    styleUrls: ["./content.component.scss"],
    standalone: true,
    imports: [LeftContentComponent, RightContentComponent],
})
export class ContentComponent {}
