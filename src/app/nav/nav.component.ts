import { Component } from '@angular/core';
import { MatToolbarRow, MatToolbar } from '@angular/material/toolbar'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarRow, MatToolbar],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
