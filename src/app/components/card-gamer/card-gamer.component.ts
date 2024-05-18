import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-gamer',
  standalone: true,
  imports: [],
  templateUrl: './card-gamer.component.html',
  styleUrl: './card-gamer.component.css'
})
export class CardGamerComponent {

  @Input() titleGame: string = '';
  @Input() descriptionGame: string = '';
  @Input() url: string = '#';
  
}
