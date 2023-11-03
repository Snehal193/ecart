import { Component } from '@angular/core';
import {
  faDashboard,
  faBox,
  faContactBook,

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faDashboard = faDashboard;
  faBox = faBox;
  faContactBook = faContactBook;

}
