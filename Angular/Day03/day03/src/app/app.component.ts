import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckTwoWayBindingComponent } from './components/twoWayBinding/check-two-way-binding.component';
import { CheckDirectivesComponent } from './components/directices/check-directives/check-directives.component';
import { CheckInteractionComponent } from './components/componentInteractions/check-interaction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CheckTwoWayBindingComponent,
    CheckDirectivesComponent,
    CheckInteractionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackName: string = 'PHP';
  itiTracks: string[] = ['Dotnet', 'OS', 'PD'];
}
