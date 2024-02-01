import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'cv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, ContentComponent]
})
export class AppComponent { }
