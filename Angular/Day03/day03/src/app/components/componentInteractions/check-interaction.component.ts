import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-interaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-interaction.component.html',
  styleUrl: './check-interaction.component.css',
})
export class CheckInteractionComponent {
  @Input() dataFromParent: string = '';
  @Input() allTracks: string[] = [];

  todoValue: string = '';
  todosList: string[] = [];
  addTodo() {
    this.todosList.push(this.todoValue);
    console.log(this.todosList);
    this.todoValue = '';
  }
  removeTodo(todoIndex: number) {
    this.todosList = this.todosList.filter((todo, index) => index != todoIndex);
  }
}
