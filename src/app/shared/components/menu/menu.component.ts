import { Component, Input } from '@angular/core';
import { Navegation } from '../../interfaces/navegation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Input()
  navegation:Navegation[]=[];
}
