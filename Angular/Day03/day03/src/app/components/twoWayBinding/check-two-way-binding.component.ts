import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-two-way-binding.component.html',
  styleUrl: './check-two-way-binding.component.css',
})
export class CheckTwoWayBindingComponent {
  //ViewChild
  inputValue: string = '';
  courseName: string = '';
  myElement: any;
  // getValue(e: any) {
  //   this.inputValue = e.target.value;
  // }

  showTitle(h1: any) {
    this.myElement = h1;
    console.log(h1.textContent);
  }
}
