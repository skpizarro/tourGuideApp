import { Component } from '@angular/core';
import { Navegation } from './shared/interfaces/navegation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tourGuideApp';

  navegation:Navegation[] =[

    {
      name:'Lista Lugares',
      path:'TourGuide/Maravillascolombia'
    },
    {
      name:'Detalle',
      path:'TourGuide/detallesitio'
    }

  ]
}
