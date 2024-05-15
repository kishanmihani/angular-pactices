import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import ApexCharts from 'apexcharts'
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  message2 = "I'm read only!";
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  canEdit = false;
  sayMessage() {
    alert(this.message);
  }
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message2 = 'You can edit me!';
    } else {
      this.message2 = "I'm read only!";
    }

  }
  writeCount(count: number) {
    console.warn(count);
  }
  
}
