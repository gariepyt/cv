import { Component, OnInit } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { CONTACT_INFO } from "src/app/constants/contact-info";
import { PhonePipe } from "src/app/pipes/phone/phone.pipe";

@Component({
    selector: "cv-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    imports: [IconComponent, PhonePipe]
})
export class HeaderComponent {
  info = CONTACT_INFO;
}
