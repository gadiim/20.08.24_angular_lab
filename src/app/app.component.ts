import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent, ItemListComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quote = 'Welcome to the Angular application!';
  name = 'MyName';
  personalData = [
    {nickname: 'nick1', pass: 'J2lj/5'},
    {nickname: 'name2', pass: 'df88.d'},
    {nickname: 'nickname3', pass: '5dfg*s'}
  ]
}
