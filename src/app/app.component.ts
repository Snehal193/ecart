import {
  faDashboard,
  faBox,
  faContactBook,

} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authenticationService: AuthenticationService) { }

  title = 'main project';
  faDashboard = faDashboard;
  faBox = faBox;
  faContactBook = faContactBook;
}
