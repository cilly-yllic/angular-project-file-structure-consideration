import { Component } from '@angular/core';

@Component({
  selector: 'app-example-tab-nav-bar-basic',
  templateUrl: './nav-bar-basic.component.html',
  styleUrls: ['./nav-bar-basic.component.scss']
})
export class NavBarBasicComponent {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
