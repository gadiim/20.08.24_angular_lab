import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';//додано - імпортовано
import { NgForOf } from '@angular/common';//додано - імпортовано

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quote = 'Welcome to the Angular application!';
  name = 'MyName';
}
