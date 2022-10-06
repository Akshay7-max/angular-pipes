import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  city:string = "Varanasi";
  salary:number = 123456789;
  n:number = 0.72;
  person:object = {firstname:"Black", lastname:"Adam"};
  dt:Date = new Date();
}
