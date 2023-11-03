import { Component } from '@angular/core';
import {
  faDashboard,
  faBox,
  faContactBook,

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faDashboard = faDashboard;
  faBox = faBox;
  faContactBook = faContactBook;
}
