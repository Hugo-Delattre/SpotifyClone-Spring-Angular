import { Component } from '@angular/core';
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    FaIconComponent, FontAwesomeModule, RouterLinkActive, RouterLink
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}
