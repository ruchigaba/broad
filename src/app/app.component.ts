import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./common/common.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app works!';
}