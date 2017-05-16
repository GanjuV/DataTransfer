import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private dataUsed: number = 0;
  title = 'App to show data passed from one component to another!';
}
