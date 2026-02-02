import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',// directive
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
