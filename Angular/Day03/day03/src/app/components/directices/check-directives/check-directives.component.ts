import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-directives.component.html',
  styleUrl: './check-directives.component.css',
})
export class CheckDirectivesComponent {
  show: boolean = false;
  color: string = 'green';
  itiTracks: string[] = ['PHP', 'Dotnet', 'OS', 'PD'];

  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }
}
